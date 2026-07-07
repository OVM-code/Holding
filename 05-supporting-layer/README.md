# Supporting layer

The shared, agent-run back-office that serves every portfolio company. This
is where the holding's "leanness" actually lives — see
`00-thesis/operating-model.md` for why that leanness sits here and not inside
the opcos.

## Model

- **One instance per department, shared across the whole portfolio** — not
  copied into each opco folder. A department agent reads/writes per-opco data
  under `03-portfolio/<slug>/` but its definition, templates, and workflow
  live here, once.
- **Modular by module, not just by department.** Each department decomposes
  into independent modules (e.g. Finance splits into bookkeeping oversight,
  FP&A, cash/treasury, tax coordination). Every opco gets its own
  `active-modules.yaml` (from `active-modules-template.yaml`) turning on
  only what that specific business needs — a single-location service
  business and a multi-site manufacturer don't need the same modules
  running, and running unneeded modules is pure cost with no offsetting
  value.
- **Overhead, not operating work.** Every department here exists to carry
  administrative/reporting load off the founder and off opco staff. None of
  them sell, market, operate, or decide for a portfolio company — that's
  human-led operating work, out of scope by design (see `CLAUDE.md`). Each
  department's README has an explicit "Where humans add value" section —
  read it before assuming a module does more than it does.
- **Expertise encoded as heuristics, not just checklists.** Every module's
  playbook states the specific things an experienced practitioner in that
  function actually watches for (e.g. finance: uninvoiced work and stale
  receivables as the real hygiene risks; sales: time-in-stage over
  raw pipeline value) — not just a generic template to fill in.
- **Manual handoff now, integration-ready later.** No department here calls
  a live accounting/payroll/CRM API yet. Each department's README documents
  where a future integration would plug in. Data comes from files a human
  exports/feeds in, mirroring how `01-deals/` works today.
- **Model-agnostic, cost-conscious by construction.** Every department
  agent follows `06-agent-toolkit/model-selection-guide.md` (Sonnet by
  default, Opus only for genuine judgment calls) and
  `06-agent-toolkit/efficiency-guidelines.md` — most modules are explicitly
  tagged with when *not* to run them, not just how to run them.
- **Pre-first-deal status:** nothing here has real opco data to operate on
  yet. This is the skeleton to work with once the first acquisition closes —
  see `03-portfolio/README.md` for how a new opco plugs into these
  departments.

## Departments

| Department | Folder | Agent | Modules |
|---|---|---|---|
| Finance & accounting | `finance/` | `finance-controller` | bookkeeping-oversight, fpa-forecasting, cash-treasury, tax-compliance-coordination |
| HR & people ops | `hr/` | `hr-partner` | not yet split into modules — single on/off switch |
| Legal & compliance | `legal-compliance/` | `legal-compliance` | compliance-calendar, contract-review, corporate-housekeeping, ip-brand-protection |
| Marketing | `marketing/` | `marketing` | content-brand-calendar, digital-presence-audit, campaign-performance-tracking |
| Sales | `sales/` | `sales` | pipeline-crm-hygiene, quote-proposal-drafting, sales-forecasting-reporting |
| Operations | `operations/` | `operations` | process-documentation, vendor-supplier-management, quality-incident-tracking, capacity-scheduling-support, it-systems-inventory |

See `active-modules-template.yaml` for the full toggle list and recommended
defaults per module.

## Cross-department workflow

`.claude/skills/portfolio-health-check/` chains all six department agents
against a single opco, running only that opco's active modules, to produce
a consolidated status update. This is the main entry point once an opco
exists — individual department agents can also be invoked directly for a
single task.

## What's deliberately not here yet

- No numeric KPI thresholds or alerting — those need real opco data to be
  meaningful, not guessed in advance. Modules note default thresholds
  (e.g. cash-treasury's 3-month runway flag) as starting points to
  recalibrate per opco, not fixed rules.
- No specific software integrations chosen (accounting, payroll, CRM
  platform) — each department README notes likely candidates
  (Belgian-market tools) as `[future integration]`, not commitments.
- No headcount or org design for the supporting layer itself — it's
  founder-run today. Revisit once the workload from a real opco makes that
  necessary.
