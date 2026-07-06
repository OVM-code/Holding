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
  opco, created from a template at that point.
- `04-holdco/` — entity structure and governance notes for the holding itself.
- `.claude/agents/` — subagents for deal sourcing, diagnosis, and structuring.
- `.claude/skills/` — slash-command workflows that chain the agents together.

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
  Any file under `02-deal-structure/` or `04-holdco/` must keep its
  "⚠ Belgian counsel required" callouts intact.
