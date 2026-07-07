# Module: corporate housekeeping

**Recommended default: off** until an opco's structure has enough moving
parts (multiple entities, external shareholders, a board beyond the
founder) to make informal tracking risky.

## What this actually prevents

SMEs — and holdcos with multiple opcos — routinely let corporate formalities
slide: decisions get made in conversation but never minuted, share
registers go stale, annual general meeting formalities get skipped. None of
this matters until it does — a due diligence process, a dispute, or a
transaction suddenly needs a clean paper trail that doesn't exist. A 30-year
company secretary's whole value is that this never becomes a fire drill.

## Process

1. Maintain a per-entity log:
   `03-portfolio/<slug>/legal/corporate-housekeeping-log.csv`.
2. Track: board/shareholder decisions and whether they're minuted, share
   register currency, annual formalities (AGM, annual accounts approval)
   and their status.
3. Flag anything undocumented that should be — a decision referenced in
   conversation or email that has no corresponding formal record.

## Where humans add value

Actually holding the meeting, making the decision, signing the minutes —
this module tracks whether the paper trail exists, it doesn't create the
substance behind it.

## Efficiency note

This module is inherently low-frequency (formalities happen periodically,
not continuously) — don't run it on the same cadence as compliance-calendar
or contract-review; check it when a formality is due or a decision is made,
not on a fixed short interval.
