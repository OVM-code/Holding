# Module: campaign performance tracking

**Recommended default: off** — needs an active paid or organic campaign to
be worth running; tracking nothing is nothing to track.

## What a 30-year marketing operator measures (and what they don't)

- **Cost per acquisition and payback, not vanity metrics.** Impressions
  and likes are noise unless tied to what a customer is actually worth to
  this specific opco — this module should always try to connect activity
  to leads/customers, not just engagement.
- **Channel comparison over channel isolation.** The value of tracking
  multiple campaigns is comparing them — which channel's cost-per-lead is
  actually competitive for this business, not just whether each one
  individually "worked."
- **Small-sample honesty.** SME campaign volumes are often too small for
  statistical confidence — a seasoned operator says "too early to tell"
  rather than over-reading three weeks of data as a trend.

## Process

1. Maintain `../templates/campaign-tracker-template.csv` — one row per
   campaign/channel/period.
2. Calculate cost-per-lead and (if conversion data is available)
   cost-per-customer per channel.
3. Compare channels on the same basis; flag where sample size is too small
   to draw a conclusion rather than forcing one.

## Where humans add value

Deciding where to actually spend, adjusting creative/targeting, and any
call that requires understanding the customer beyond what the numbers show
— this module compares performance, it doesn't set strategy.

## Efficiency note

Only re-analyze a channel's data when new performance data has actually
been added — don't recompute unchanged historical comparisons every check.
