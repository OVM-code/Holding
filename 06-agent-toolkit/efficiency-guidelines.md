# Efficiency guidelines

Concrete practices for keeping every agent/skill in this repo lean on
context and tokens — both to stretch a Pro plan's usage allowance and
because it's the same discipline that keeps this portable and cheap if it
ever runs on metered API billing.

## Context loading

- **Read only what the task needs.** An agent scoped to one opco's finance
  should read that opco's finance files, not the whole `03-portfolio/` tree.
  Name the specific file path in the agent's instructions rather than "scan
  the portfolio."
- **Don't re-read files already in context.** If a skill chains multiple
  agents in one turn, pass forward what was already learned instead of
  having the next agent re-read the same source file from scratch.
- **Point to templates, don't inline them.** Agents reference
  `05-supporting-layer/finance/templates/monthly-report-template.md` by
  path rather than having the full template pasted into every agent
  definition — the definition stays small; the template is read once, when
  actually used.
- **Prefer targeted reads over full-file reads for large files.** If a CSV
  or log grows large (e.g. a compliance calendar spanning years), an agent
  should filter/grep for the relevant rows rather than loading the whole
  file, once files reach that size.

## Output format

- **Structured beats prose for anything a human or another agent will
  parse.** Tables, checklists, and the YAML frontmatter already used across
  this repo's templates cost fewer tokens than equivalent narrative prose
  and are easier to scan.
- **No restating the input.** An agent filling a template shouldn't repeat
  back the source data in a summary paragraph before filling the template —
  the template *is* the summary.
- **Say "nothing to report" in one line.** Per `portfolio-health-check`,
  a department with nothing notable gets one line, not a padded paragraph
  explaining there's nothing to say.

## Process shape

- **Single-pass by default.** Most tasks in this repo (fill a scorecard,
  draft a checklist) are one agent, one pass. Don't chain agents unless a
  later stage genuinely depends on judgment from an earlier one that can't
  be inlined.
- **Chain only when stages are genuinely sequential and each earns its
  cost.** `screen-deal` chains three agents because each stage's output
  gates whether the next stage should even run (a disqualified candidate
  never reaches diagnosis, saving that cost entirely) — that's the bar for
  justifying a chain, not "this feels more thorough."
- **Stop early on a clear "no."** Every chained skill in this repo
  (`screen-deal`) is built to halt the moment a stage produces a
  disqualifying result, rather than running all stages regardless and
  discarding the output. Apply this to any new chained workflow.

## Reuse over regeneration

- **New agents extend existing templates before inventing new ones.**
  Check `01-deals/`, `02-deal-structure/`, `05-supporting-layer/` for a
  template that's 80% right before drafting from scratch — editing an
  existing shape costs less than generating a new one and keeps the repo
  consistent.
- **Don't regenerate static content.** If a document (a template, a
  boilerplate section) doesn't change based on the specific task, it should
  be a file the agent reads, not text the model re-produces from
  instructions every run.

## A quick self-check for any new agent/skill

Before finalizing a new agent or skill, check:

- [ ] Does it name exactly which files it reads, rather than "the relevant
      files"?
- [ ] Does its output format avoid restating its input?
- [ ] If it's a skill chaining agents, does it stop at the first
      disqualifying/blocking result instead of running everything anyway?
- [ ] Is there an existing template/agent 80% of the way there that this
      should extend instead of duplicate?
