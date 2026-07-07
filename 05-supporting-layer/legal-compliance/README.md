# Legal & compliance

Modular. Turn on only what a given opco needs via
`03-portfolio/<slug>/active-modules.yaml`. One `legal-compliance` agent runs
whichever modules are active.

## Modules

| Module | Covers | Recommended default |
|---|---|---|
| `modules/compliance-calendar.md` | Statutory deadline tracking | On |
| `modules/contract-review.md` | First-pass contract flagging | On |
| `modules/corporate-housekeeping.md` | Board minutes, shareholder decisions, entity records | Off until multi-entity complexity exists |
| `modules/ip-brand-protection.md` | Trademark/IP tracking | Off unless the opco has real IP/brand exposure |

## What this department is not

- Not legal advice. Every ⚠ flag here and in `02-deal-structure/` means the
  same thing: get an actual Belgian lawyer/notary before relying on this.
- Not a compliance guarantee — this is a tracking and drafting aid; the
  founder remains responsible for actually meeting obligations.

## Where humans add value

- **Every actual legal judgment** — is this contract term acceptable, does
  this situation carry real liability, is this filing correct — goes to a
  human, and for anything material, to actual Belgian counsel. This
  department's ceiling is "flag it well," never "decide it."
- **The relationships** — with counsel, with a notary, with regulators —
  stay human. A 30-year general counsel's real value is judgment built from
  pattern recognition across many deals and a network to call on; this
  department provides the pattern-recognition-adjacent first pass, not the
  relationship or the accountability.
- **Anything with money, liability, or a signature on the line.**

## Data flow (manual handoff today)

1. Statutory deadlines and known obligations entered into the compliance
   calendar as each opco's specifics become known.
2. Contracts to review are provided directly (PDF/text) for a first pass.
3. `legal-compliance` runs whichever modules are active against the
   provided data.

## Future integration points

`[future integration]` — not built, just anticipated:

- Belgian Crossroads Bank for Enterprises (KBO/BCE) for entity-level public
  data checks.
- e-notariat / company register filing systems, if filing volume ever
  justifies direct integration over manual filing via counsel.

Do not build against any of these without being asked.
