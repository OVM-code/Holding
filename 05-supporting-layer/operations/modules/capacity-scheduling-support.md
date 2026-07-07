# Module: capacity & scheduling support

**Recommended default: off** — on for opcos where capacity constraints
(staff hours, equipment/production capacity, appointment slots) are a
recurring bottleneck worth tracking systematically.

## What a 30-year ops planner tracks (visibility, not scheduling itself)

- **Utilization vs. capacity, not just a calendar.** The useful number is
  "how much of available capacity is actually committed," which surfaces
  slack or overcommitment before it becomes a crisis — a calendar full of
  bookings doesn't show whether that's 60% or 110% of real capacity.
- **Bottleneck identification, not full scheduling.** This module
  identifies where capacity is tight (which resource, which period) — it
  does not build or optimize the actual schedule, which requires
  operational judgment about priority and relationships this module
  doesn't have.
- **Lead-time trend.** A creeping increase in how far out the business is
  booking is often the earliest visible sign of a capacity problem, well
  before anyone consciously notices it.

## Process

1. Maintain `../templates/capacity-planner-template.csv` — planned
   utilization vs. actual capacity per period.
2. Flag periods over a threshold (default: 90% committed) or a sustained
   upward lead-time trend.
3. Do not assign, prioritize, or reschedule anything — surface the
   constraint for a human to act on.

## Where humans add value

Every actual scheduling decision, prioritization call, and capacity
investment decision (hire, equipment, hours) — informed by this module's
visibility, made by whoever runs operations at the opco.

## Efficiency note

This module is a lightweight aggregation, not a scheduling engine — keep
it that way; if a request starts asking for actual schedule optimization,
that's out of this module's scope and should be flagged as a human/
specialist-tool task, not attempted here.
