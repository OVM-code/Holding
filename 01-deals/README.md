# Deal pipeline

`pipeline.csv` is the single source of truth for where every candidate stands.
One row per candidate, keyed by `slug` (matches the filename under
`candidates/<slug>.md`).

## Stages

1. `sourced` — identified, not yet screened.
2. `screening` — scorecard in progress (`screening/<slug>.md`).
3. `diagnosing` — passed initial screen, full diagnostic writeup in progress
   (`diagnosis/<slug>.md`), working toward one of `operator-gap` /
   `cost-structure` / `demand-decay`.
4. `disqualified` — verdict was `demand-decay`, or another hard disqualifier
   from `00-thesis/investment-thesis.md` applied. Keep the file, don't delete —
   it's a future re-check point.
5. `structuring` — verdict was savable; drafting the service agreement +
   option-to-buy terms (`02-deal-structure/`) for this specific candidate.
6. `service-phase` — engagement live, owner is a paying client, holding is
   inside the business proving value.
7. `option-decision` — approaching the point of exercising (or not) the
   option to buy.
8. `acquired` — option exercised, closed. Move to `03-portfolio/<slug>/`.
9. `passed` — walked away during service phase or at option-decision, for
   reasons other than the original diagnostic disqualifiers.

## Columns

- `screening_score` — output of the screening scorecard (see
  `screening/_template.md`), free-form until enough data exists to standardize
  a numeric scale.
- `diagnosis_verdict` — one of `operator-gap`, `cost-structure`,
  `demand-decay`, or blank if not yet diagnosed.
- `owner_contact_ok` — yes/no/pending. Track consent for outreach explicitly;
  do not contact an owner sourced from a public/broker list without checking
  this first.

## Files per candidate

- `candidates/<slug>.md` — the case file: what the business is, source, basic
  facts. Created first, updated throughout.
- `screening/<slug>.md` — scorecard against `00-thesis/investment-thesis.md`.
- `diagnosis/<slug>.md` — full write-up against
  `00-thesis/diagnostic-framework.md`, ending in a verdict.
