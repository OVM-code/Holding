# Module: FP&A / forecasting

**Recommended default: off** until an opco has enough period history
(roughly 6+ months of clean data from `bookkeeping-oversight`) to forecast
against — a forecast built on two data points is noise, not signal.

## What a 30-year FP&A practice looks like

- **Driver-based, not trend-extrapolated.** A seasoned FP&A read doesn't
  just project last year +5% — it identifies the 3-5 actual drivers of the
  business (units sold, average order value, headcount, utilization rate)
  and forecasts each, because that's what lets you explain *why* a forecast
  moved when it does.
- **Budget-vs-actual as a diagnostic, not a scoreboard.** A variance is a
  question ("why is marketing spend 20% over plan?"), not a verdict — this
  module's job is to surface the variance and a plausible driver-level
  explanation, not to grade performance.
- **Rolling forecast over static annual budget** once an opco has any
  seasonality or volatility — re-forecast the remainder of the year each
  period rather than measuring everything against a January assumption
  that's stale by June.

## Process

1. Confirm sufficient history exists (see recommended-default note above);
   if not, say so rather than forecasting on thin data.
2. Identify the 3-5 real drivers of this specific opco's revenue and cost
   structure from the bookkeeping-oversight reports on file.
3. Build/update a rolling forecast and a budget-vs-actual variance view for
   the current period.
4. Flag variances above a threshold (default 10%, adjust per opco) with a
   plausible driver-level explanation, not just the number.

## Where humans add value

Deciding what to do about a variance — cut spend, accept it as one-off,
change the plan — and any forecast assumption that depends on
market/relationship knowledge the agent doesn't have (a big customer's
renewal likelihood, a known seasonal event). The agent's job is to make the
mechanical forecasting fast and consistent; the founder's job is to know
which numbers to trust more or less.

## Efficiency note

Rebuild the forecast incrementally from the prior period's forecast plus
new actuals — don't regenerate the full model from raw history every run.
