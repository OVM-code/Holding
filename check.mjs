#!/usr/bin/env node
/**
 * Holding repo validator. Zero dependencies, Node 18+.
 *
 *   node check.mjs        exit 0 = conventions hold; exit 1 = contract broken
 *
 * Mechanically enforces the working conventions in CLAUDE.md:
 *  - 01-deals/pipeline.csv is the single source of truth: valid header, unique
 *    kebab-case slugs, known stages/verdicts, dates well-formed, and a
 *    candidates/<slug>.md file for every row (and vice versa)
 *  - stage/file consistency (screening file once screening, diagnosis file once
 *    diagnosing, portfolio folder once acquired)
 *  - "⚠ Belgian counsel required" callouts are never removed from legal templates
 *  - every .claude/agents/<name>.md and .claude/skills/<name>/SKILL.md conforms
 *    to the 06-agent-toolkit standard (frontmatter, matching names, model note, tools)
 *  - the load-bearing _template files exist
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

/* ── tiny CSV parser (handles quoted fields) ── */
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f !== '')) rows.push(row);
  return rows;
}

/* ── pipeline.csv ── */
const EXPECTED_HEADER = ['slug', 'company_name', 'sector', 'region', 'stage', 'source', 'screening_score', 'diagnosis_verdict', 'owner_situation', 'next_action', 'owner_contact_ok', 'last_updated', 'notes'];
const STAGES = ['sourced', 'screening', 'diagnosing', 'disqualified', 'structuring', 'service-phase', 'option-decision', 'acquired', 'passed'];
const VERDICTS = ['', 'operator-gap', 'cost-structure', 'demand-decay'];
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
// stages at/after which the corresponding working file should exist
const NEEDS_SCREENING_FILE = STAGES.slice(1); // everything past 'sourced'
const NEEDS_DIAGNOSIS_FILE = ['diagnosing', 'disqualified', 'structuring', 'service-phase', 'option-decision', 'acquired', 'passed'];

const pipelineSlugs = new Set();
if (!exists('01-deals/pipeline.csv')) {
  err('01-deals/pipeline.csv is missing — it is the single source of truth for the pipeline');
} else {
  const rows = parseCsv(read('01-deals/pipeline.csv'));
  const header = rows.shift() || [];
  if (header.join(',') !== EXPECTED_HEADER.join(',')) {
    err(`pipeline.csv header changed. Expected:\n    ${EXPECTED_HEADER.join(',')}\n  found:\n    ${header.join(',')}\n  (column changes must be deliberate: update 01-deals/README.md, this validator, and every agent that reads the csv)`);
  }
  const col = Object.fromEntries(EXPECTED_HEADER.map((c, i) => [c, i]));
  for (const r of rows) {
    const slug = r[col.slug] || '(empty)';
    const where = `pipeline.csv row "${slug}"`;
    if (!KEBAB.test(slug)) err(`${where}: slug is not kebab-case`);
    if (pipelineSlugs.has(slug)) err(`${where}: duplicate slug — one row per candidate`);
    pipelineSlugs.add(slug);
    const stage = r[col.stage];
    if (!STAGES.includes(stage)) err(`${where}: unknown stage "${stage}" (valid: ${STAGES.join(', ')})`);
    const verdict = r[col.diagnosis_verdict] || '';
    if (!VERDICTS.includes(verdict)) err(`${where}: unknown diagnosis_verdict "${verdict}" (valid: operator-gap, cost-structure, demand-decay, or blank)`);
    const contact = r[col.owner_contact_ok] || '';
    if (contact && !['yes', 'no', 'pending'].includes(contact)) err(`${where}: owner_contact_ok must be yes/no/pending (found "${contact}") — consent tracking is explicit`);
    const updated = r[col.last_updated] || '';
    if (updated && !DATE.test(updated)) err(`${where}: last_updated "${updated}" is not YYYY-MM-DD`);
    if (!exists(`01-deals/candidates/${slug}.md`)) err(`${where}: no case file at 01-deals/candidates/${slug}.md`);
    if (NEEDS_SCREENING_FILE.includes(stage) && !exists(`01-deals/screening/${slug}.md`)) warn(`${where}: stage is "${stage}" but 01-deals/screening/${slug}.md does not exist`);
    if (NEEDS_DIAGNOSIS_FILE.includes(stage) && !exists(`01-deals/diagnosis/${slug}.md`)) warn(`${where}: stage is "${stage}" but 01-deals/diagnosis/${slug}.md does not exist`);
    if (stage === 'acquired' && !exists(`03-portfolio/${slug}`)) err(`${where}: stage is "acquired" but 03-portfolio/${slug}/ does not exist — acquired opcos move to the portfolio`);
  }
}
// every candidate file must be on the pipeline
if (exists('01-deals/candidates')) {
  for (const f of fs.readdirSync(path.join(ROOT, '01-deals/candidates'))) {
    if (!f.endsWith('.md') || f === '_template.md') continue;
    const slug = f.replace(/\.md$/, '');
    if (!pipelineSlugs.has(slug)) err(`01-deals/candidates/${f} has no row in pipeline.csv — the csv is the source of truth; add the row`);
  }
}

/* ── legal callouts must never be removed ── */
if (exists('02-deal-structure')) {
  for (const f of fs.readdirSync(path.join(ROOT, '02-deal-structure')).filter((f) => f.endsWith('.md'))) {
    if (!read(`02-deal-structure/${f}`).includes('Belgian counsel')) {
      err(`02-deal-structure/${f}: "Belgian counsel" callout is missing — these templates are not legal advice and must say so`);
    }
  }
}
for (const [file, marker] of [
  ['04-holdco/entity-structure.md', 'Belgian counsel'],
  ['05-supporting-layer/legal-compliance/templates/contract-review-checklist-template.md', 'counsel'],
]) {
  if (exists(file) && !read(file).includes(marker)) err(`${file}: required "${marker}" callout was removed`);
}

/* ── load-bearing templates ── */
for (const t of [
  '01-deals/candidates/_template.md', '01-deals/screening/_template.md', '01-deals/diagnosis/_template.md',
  '06-agent-toolkit/templates/core-template.md', '06-agent-toolkit/templates/claude-code-wrapper-template.md',
]) {
  if (!exists(t)) err(`${t} is missing — agents scaffold from it`);
}

/* ── agents & skills conform to the 06-agent-toolkit standard ── */
function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return fm;
}
if (exists('.claude/agents')) {
  for (const f of fs.readdirSync(path.join(ROOT, '.claude/agents')).filter((f) => f.endsWith('.md'))) {
    const body = read(`.claude/agents/${f}`);
    const fm = frontmatter(body);
    const stem = f.replace(/\.md$/, '');
    if (!fm) { err(`.claude/agents/${f}: no frontmatter block — see 06-agent-toolkit/templates/claude-code-wrapper-template.md`); continue; }
    if (fm.name !== stem) err(`.claude/agents/${f}: frontmatter name "${fm.name}" must match the filename ("${stem}")`);
    if (!fm.description) err(`.claude/agents/${f}: missing description — the router needs it to know when to invoke this agent`);
    if (!fm.tools) warn(`.claude/agents/${f}: no tools allowlist — toolkit standard is a minimal explicit list`);
    if (!/<!--\s*model:/.test(body)) warn(`.claude/agents/${f}: no "<!-- model: … -->" note — every agent states its Sonnet/Opus choice per 06-agent-toolkit/model-selection-guide.md`);
  }
}
if (exists('.claude/skills')) {
  for (const d of fs.readdirSync(path.join(ROOT, '.claude/skills'))) {
    const p = `.claude/skills/${d}/SKILL.md`;
    if (!exists(p)) { err(`.claude/skills/${d}/ has no SKILL.md`); continue; }
    const fm = frontmatter(read(p));
    if (!fm) { err(`${p}: no frontmatter block`); continue; }
    if (fm.name !== d) err(`${p}: frontmatter name "${fm.name}" must match the directory ("${d}")`);
    if (!fm.description) err(`${p}: missing description`);
  }
}

/* ── report ── */
for (const e of errors) console.log(`✗ ${e}`);
for (const w of warnings) console.log(`△ ${w}`);
console.log(errors.length || warnings.length
  ? `${errors.length} error(s), ${warnings.length} warning(s).`
  : `✓ conventions hold — pipeline consistent (${pipelineSlugs.size} candidates), callouts intact, agents/skills conform`);
process.exit(errors.length ? 1 : 0);
