# Module: vendor & supplier management

**Recommended default: off** — turn on once vendor count is large enough
that informal tracking risks a missed renewal or an unnoticed
single-point-of-failure supplier.

## What a 30-year procurement/ops discipline tracks

- **Single points of failure first.** The highest-value question isn't
  "are we tracking every vendor" — it's "which vendors, if they
  disappeared tomorrow, would actually hurt the business, and do we have
  any backup." Flag single-source-dependency vendors explicitly.
- **Renewal and contract-term visibility** — feeding
  `05-supporting-layer/legal-compliance/`'s contract-review module rather
  than duplicating it; this module's job is knowing *when* to trigger that
  review, not doing it itself.
- **A simple scorecard, not a procurement bureaucracy.** For an SME, vendor
  management should be lightweight: reliability, price competitiveness,
  and relationship health tracked simply — not a heavyweight vendor
  qualification process that doesn't fit the business's scale.

## Process

1. Maintain `../templates/vendor-scorecard-template.csv`.
2. Flag single-source-dependency vendors with no identified backup.
3. Flag upcoming contract renewals (feeding into
   `legal-compliance`'s contract-review module when a renewal is
   approaching).

## Where humans add value

The actual vendor relationship, negotiation, and any decision to switch or
diversify suppliers — informed by this module's visibility, decided by
whoever owns supplier relationships at the opco.

## Efficiency note

Update the scorecard incrementally as vendor information changes; don't
re-derive the full vendor list from scratch each check.
