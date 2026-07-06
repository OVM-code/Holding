# Legal & compliance

## Scope

- Compliance calendar: tracking recurring statutory obligations per opco
  (annual accounts filing, UBO register updates, VAT filings, insurance
  renewals) so nothing lapses silently.
- Contract review support: a first-pass read of contracts (supplier,
  customer, lease) flagging unusual terms or risk — not a substitute for a
  lawyer's sign-off on anything material.
- Corporate housekeeping: tracking board minutes, shareholder decisions,
  and other formalities the holding needs to keep straight across multiple
  entities.

## What this is not

- Not legal advice. Every ⚠ flag in `02-deal-structure/` and here means the
  same thing: get an actual Belgian lawyer/notary before relying on this.
- Not a compliance guarantee — this is a tracking and drafting aid; the
  founder remains responsible for actually meeting obligations.

## Cadence

- Ongoing: compliance calendar maintained per opco
  (`templates/compliance-calendar-template.csv`), reviewed monthly for
  anything due in the next 60 days.
- On demand: contract review checklist whenever a new contract needs a
  first pass before deeper legal review.

## Data flow (manual handoff today)

1. Statutory deadlines and known obligations entered into the compliance
   calendar as each opco's specifics become known (this can't be
   pre-populated generically — filing deadlines depend on entity type,
   fiscal year-end, sector-specific licenses, etc.).
2. Contracts to review are provided directly (PDF/text) for a first pass.
3. `legal-compliance` agent flags what's due soon or what looks unusual in
   a contract; a human (ideally with actual counsel) makes the call.

## Future integration points

`[future integration]` — not built, just anticipated:

- Belgian Crossroads Bank for Enterprises (KBO/BCE) for entity-level public
  data checks.
- e-notariat / company register filing systems, if filing volume ever
  justifies direct integration over manual filing via counsel.

Do not build against any of these without being asked.
