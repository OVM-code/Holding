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
- **Overhead, not operating work.** Every department here exists to carry
  administrative/reporting load off the founder and off opco staff. None of
  them make commercial, hiring, or strategic decisions for a portfolio
  company — that's human-led operating work, out of scope by design (see
  `CLAUDE.md`).
- **Manual handoff now, integration-ready later.** No department here calls
  a live accounting/payroll/CRM API yet. Each department's README documents
  where a future integration would plug in. Data comes from files a human
  exports/feeds in, mirroring how `01-deals/` works today.
- **Pre-first-deal status:** nothing here has real opco data to operate on
  yet. This is the skeleton to work with once the first acquisition closes —
  see `03-portfolio/README.md` for how a new opco plugs into these
  departments.

## Departments

| Department | Folder | Agent | Covers |
|---|---|---|---|
| Finance & accounting | `finance/` | `finance-controller` | Bookkeeping oversight, consolidated reporting, cash flow monitoring |
| HR & people ops | `hr/` | `hr-partner` | Onboarding, policy templates, role scorecards, hiring support |
| Legal & compliance | `legal-compliance/` | `legal-compliance` | Compliance calendar, contract review support, corporate housekeeping |
| Marketing, IT & ops admin | `commercial-ops/` | `commercial-ops` | Marketing calendar, IT/systems inventory, scheduling/admin overflow |

## Cross-department workflow

`.claude/skills/portfolio-health-check/` chains all four department agents
against a single opco to produce a consolidated status update. This is the
main entry point once an opco exists — individual department agents can also
be invoked directly for a single task.

## What's deliberately not here yet

- No numeric KPI thresholds or alerting — those need real opco data to be
  meaningful, not guessed in advance.
- No specific software integrations chosen (accounting, payroll, CRM
  platform) — each department README notes likely candidates
  (Belgian-market tools) as `[future integration]`, not commitments.
- No headcount or org design for the supporting layer itself — it's
  founder-run today. Revisit once the workload from a real opco makes that
  necessary.
