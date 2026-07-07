# Finance & accounting

Modular. Turn on only what a given opco needs via
`03-portfolio/<slug>/active-modules.yaml` (copied from
`05-supporting-layer/active-modules-template.yaml`). Every module is run by
the same `finance-controller` agent — modules are playbooks it follows, not
separate agents, so there's one agent to know and N capabilities to enable.

## Modules

| Module | Covers | Recommended default |
|---|---|---|
| `modules/bookkeeping-oversight.md` | Review bookkeeping accuracy/timeliness, monthly report | On |
| `modules/fpa-forecasting.md` | Budget-vs-actual, driver-based forecasting | Off until there's history |
| `modules/cash-treasury.md` | Cash position, runway, 13-week cash flow | On |
| `modules/tax-compliance-coordination.md` | Tax deadline tracking, accountant liaison prep | Off until accountant relationship is set |

## What this department is not

- Not a replacement for a certified Belgian accountant (`boekhouder` /
  `comptable`) or the statutory annual accounts filing — every opco keeps
  its own accountant of record. This layer adds oversight, speed, and
  pattern-recognition, not compliance or certification.
- Not investment or tax advice.

## Where humans add value

- **Signing off on anything sent externally** — a report to a bank, an
  investor, a tax authority. This department drafts and flags; a human
  reviews before anything leaves the building.
- **Judgment calls with real consequences** — whether to draw on a credit
  line, renegotiate supplier terms, delay a hire based on cash position.
  The agent surfaces the numbers and the pattern; the founder (or the
  opco's operator) decides.
- **The relationship with the opco's accountant/bookkeeper.** This layer
  never replaces that relationship — it makes the founder's side of it
  faster and better-informed.
- **Anything requiring professional judgment under uncertainty** that a
  30-year controller would flag as "this needs a conversation, not a
  report" — e.g. a number that's technically fine but smells wrong. The
  agent is built to say so explicitly rather than paper over it with a
  clean-looking report.

## Data flow (manual handoff today)

1. Opco's bookkeeper/accountant exports a period report (P&L, balance sheet
   summary, or whatever's available) as CSV/PDF.
2. Founder (or opco contact) drops it into
   `03-portfolio/<slug>/finance/inbox/`.
3. `finance-controller` runs whichever modules are active for this opco
   against that data.

## Future integration points

`[future integration]` — not built, just anticipated:

- Belgian accounting platforms commonly used by SMEs: Yuki, Exact Online,
  Odoo, Horus. An API pull would replace the manual export step above.
- Bank feed integration (e.g. via Ponto/Isabel in Belgium) for live cash
  position instead of periodic exports.

Do not build against any of these without being asked — they require API
credentials, security review, and a concrete opco using that specific
platform.
