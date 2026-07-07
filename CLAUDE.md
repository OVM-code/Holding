# Holding — orientation for agents

This repo is the operating system for a small Belgian holding company. Read this
before touching anything else in the repo.

## What this company is

A holding company that acquires **sound-but-underperforming Belgian SMEs** from
owners ready to exit, runs a lean **agentic back-office** across the portfolio,
and grows each business with **human-led operating work**. Buy to fix and keep —
not to strip and flip. See `00-thesis/operating-model.md` for the full model.

Leanness lives at the holding level, not the acquired-company level. Agents
carry overhead (screening, reporting, drafting, admin). People do the work that
actually grows a business. Never conflate the two: an agent proposing to
"automate" operating/growth work is out of scope by design.

## Repo map

- `00-thesis/` — investment thesis, the diagnostic framework, the operating model.
  Read `diagnostic-framework.md` before touching any deal file — it's the core
  judgment call the whole pipeline depends on.
- `01-deals/` — the live pipeline. `pipeline.csv` is the single source of truth
  for deal stage. One file per candidate under `candidates/`.
- `02-deal-structure/` — templates for the service-first → option-to-buy
  structure. Generic drafts with explicit Belgian-counsel flags — never treat
  these as final legal documents.
- `03-portfolio/` — empty until the first acquisition closes. One folder per
  opco, created from a template at that point; each opco's folder holds the
  per-department working data that the supporting layer operates on.
- `04-holdco/` — entity structure and governance notes for the holding itself.
- `05-supporting-layer/` — the shared, holding-level back-office departments
  (finance, HR, legal/compliance, commercial-ops) that serve every opco. One
  instance per department, not copied per opco — see
  `05-supporting-layer/README.md`.
- `06-agent-toolkit/` — the standard every new agent/skill in this repo
  follows: model selection (Sonnet vs. Opus), token/context efficiency, and
  a model-agnostic-core / Claude-specific-wrapper split for portability.
  Read this before building anything new under `.claude/` — or just use
  `/new-agent`, which applies it automatically.
- `.claude/agents/` — subagents for deal sourcing/diagnosis/structuring,
  each supporting-layer department, and `agent-builder` (scaffolds new
  agents/skills from `06-agent-toolkit/`).
- `.claude/skills/` — slash-command workflows that chain the agents together
  (`screen-deal` for the deal pipeline, `portfolio-health-check` for an
  opco's supporting-layer status, `new-agent` to build a new one).

## Verification — run before every commit

```
node check.mjs
```

Zero dependencies, Node 18+. It mechanically enforces the conventions below:
pipeline.csv integrity (header, unique kebab slugs, valid stages/verdicts/consent
values, dates), candidate-file ↔ pipeline-row consistency in both directions,
stage/file consistency (screening/diagnosis files, portfolio folder on `acquired`),
"Belgian counsel" callout preservation, load-bearing `_template` files, and
agent/skill conformance to the `06-agent-toolkit` standard (frontmatter names match
files, descriptions present, model note, minimal tools list). CI runs it on every
push and PR. If you change a convention deliberately, change `check.mjs` in the same
commit — the validator is the mechanical form of this document, and they must not
drift apart. If you change the pipeline.csv columns, also update `01-deals/README.md`
and every agent that reads the csv.

## Working conventions

- Deal data is Markdown/YAML/CSV, not a database or app — keep it that way
  until there's a concrete reason to add tooling.
- Every candidate file lives at `01-deals/candidates/<slug>.md`, using
  `01-deals/candidates/_template.md`.
- Update `01-deals/pipeline.csv` whenever a candidate's stage changes — agents
  and humans both read it as the pipeline status.
- Diagnostic verdicts (`operator-gap` / `cost-structure` / `demand-decay`) are
  never soft-pedaled. The default posture is skepticism: a target is a
  value-trap until the evidence says otherwise, not the reverse.
- No integration currently makes live calls to KBO/BCE, Graydon, or bank/accounting
  APIs. Where a workflow anticipates one, it's marked `[future integration]` —
  do not silently build a scraper or API client without being asked.
- Legal/financial templates are structurally complete but **not legal advice**.
  Any file under `02-deal-structure/`, `04-holdco/`, or
  `05-supporting-layer/legal-compliance/` must keep its
  "⚠ Belgian counsel required" callouts intact.
- Supporting-layer department agents only operate on real opcos under
  `03-portfolio/<slug>/` — they are not part of the deal pipeline and should
  say so if asked to work on a candidate that hasn't been acquired yet.
