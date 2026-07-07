# Module: sales forecasting & reporting

**Recommended default: off** — depends on `pipeline-crm-hygiene` data being
current; running this without clean pipeline data produces a forecast built
on noise.

## What a 30-year sales-ops forecast actually does

- **Weighted, not summed.** A raw sum of open pipeline value is always
  wrong — a seasoned practice weights each deal by stage-based probability
  (calibrated to this opco's own historical close rates once enough
  history exists, generic stage-based estimates until then) rather than
  treating every open deal as equally likely to close.
- **Commit / best-case / pipeline, three numbers not one.** A single
  forecast number hides the range — the standard structure is: commit
  (near-certain), best case (if things go well), full pipeline (everything
  open), so the founder can plan against the conservative number while
  knowing the upside.
- **Compare forecast to actual close rate over time**, and recalibrate —
  if this opco's deals close at 30% not the generic 50% assumed for their
  stage, the weighting should reflect that after enough data exists.

## Process

1. Pull current pipeline from `03-portfolio/<slug>/sales/pipeline.csv`.
2. Apply stage-based weighting (generic defaults until enough opco history
   exists to calibrate; note explicitly which is in use).
3. Report commit / best-case / full-pipeline, plus period-over-period
   trend.

## Where humans add value

Deciding what to actually plan against (commit vs. best case), and any
judgment about a specific large deal that skews the numbers — a seasoned
sales leader's gut read on one big deal often outweighs the generic
stage-weighting for that single deal.

## Efficiency note

Recalculate only when pipeline data has changed since the last forecast —
this is a derived report, not a fresh analysis each time.
