# Module: compliance calendar

**Recommended default: on.** A missed statutory deadline is pure downside
with no offsetting upside — cheapest module to justify running everywhere.

## What a 30-year compliance function tracks

Beyond the obvious (annual accounts, VAT), the deadlines that actually
catch SMEs off guard:

- **UBO register updates** (`UBO-register` / `registre UBO`) — required
  whenever beneficial ownership changes, easy to forget after a
  restructuring or share transfer.
- **Sector-specific licenses/permits** with renewal dates buried in a
  drawer, not in anyone's calendar.
- **Insurance renewals** — professional liability, property, D&O if
  applicable — lapses here are invisible until a claim happens.
- **Employment-related statutory deadlines** (see
  `05-supporting-layer/hr/` for overlap) — e.g. mandatory
  risk-assessment renewals where applicable.

## Process

1. Maintain `03-portfolio/<slug>/legal/compliance-calendar.csv` from
   `../templates/compliance-calendar-template.csv`.
2. On each check, scan for anything due within 60 days, sorted by urgency.
3. For anything due within 14 days with no confirmed action, flag as
   urgent explicitly — don't let proximity alone convey urgency in a table
   row nobody reads closely.

## Where humans add value

Actually filing, renewing, or executing — this module tracks and reminds,
it does not submit anything on the opco's behalf.

## Efficiency note

Filter the calendar file for upcoming rows rather than reading and
re-summarizing every row on every check once the calendar has real history.
