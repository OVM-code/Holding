# Finance & accounting

## Scope

- Oversight of each opco's bookkeeping — not doing the bookkeeping itself
  (that likely stays with the opco's existing accountant/bookkeeper unless
  diagnosis says otherwise), but reviewing it for accuracy and timeliness.
- Consolidated reporting across the portfolio: a rollup the founder can read
  in minutes, not a replacement for statutory accounts.
- Cash flow monitoring per opco, flagged early enough to act on.
- Invoicing / AP-AR hygiene checks (are things being sent, are things being
  chased) — not running AP/AR itself.

## What this is not

- Not a replacement for a certified Belgian accountant (`boekhouder` /
  `comptable`) or the statutory annual accounts filing — every opco keeps its
  own accountant of record. This layer adds oversight and speed, not
  compliance.
- Not investment or tax advice.

## Cadence

- Monthly: consolidated report (see `templates/monthly-report-template.md`),
  fed by whatever export the opco's bookkeeping system produces.
- Ad hoc: cash flow flag if a tracked metric crosses a threshold defined per
  opco (thresholds set once real data exists — see
  `templates/cashflow-tracker-template.csv`).

## Data flow (manual handoff today)

1. Opco's bookkeeper/accountant exports a period report (P&L, balance sheet
   summary, or whatever's available) as CSV/PDF.
2. Founder (or opco contact) drops it into
   `03-portfolio/<slug>/finance/inbox/`.
3. `finance-controller` agent reads it, fills the monthly report template,
   updates the cash flow tracker, flags anything that needs attention.

## Future integration points

`[future integration]` — not built, just anticipated:

- Belgian accounting platforms commonly used by SMEs: Yuki, Exact Online,
  Odoo, Horus. An API pull would replace the manual export step in step 1
  above.
- Bank feed integration (e.g. via Ponto/Isabel in Belgium) for live cash
  position instead of periodic exports.

Do not build against any of these without being asked — they require API
credentials, security review, and a concrete opco using that specific
platform.
