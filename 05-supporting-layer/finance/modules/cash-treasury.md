# Module: cash & treasury

**Recommended default: on.** Cash is the one number that kills a business
before the P&L even notices — worth tracking from day one regardless of
opco size.

## What a 30-year treasury discipline looks like

- **13-week rolling cash flow, not a monthly snapshot.** A single "cash
  position today" number hides a payroll-week crunch three weeks out. The
  standard SME treasury tool is a 13-week rolling view of known inflows and
  outflows, updated weekly.
- **Runway in months, always stated plainly.** "We have €X" means less than
  "we have N months of runway at current burn" — the second framing is what
  drives decisions.
- **Threshold-based alerting, not constant narration.** A seasoned
  treasury function doesn't report cash weekly with commentary — it stays
  silent when things are normal and flags loudly and early when a threshold
  is approached, because that's what earns attention when it matters.

## Process

1. Update `../templates/cashflow-tracker-template.csv` with the current
   period's cash position, inflows, outflows.
2. Calculate runway in months at current burn rate.
3. Compare against the threshold set for this opco (default: flag if
   runway drops below 3 months, or if a single-period outflow spike isn't
   explained by known cause — adjust per opco once real data exists).
4. If nothing crosses a threshold, say so in one line — don't produce a
   report nobody needs to read.

## Where humans add value

Any actual treasury decision — drawing a credit line, delaying a payment,
renegotiating terms, deciding which invoice to chase first when cash is
tight. This module's entire value is surfacing the runway number early and
plainly enough that a human has time to act, not acting itself.

## Efficiency note

This is the one finance module that should run on a tight, cheap loop
(weekly is enough) — it doesn't need deep analysis, it needs to not be
missed. Keep the check itself mechanical; only escalate to narrative
explanation when a threshold is actually crossed.
