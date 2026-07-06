# Holdco entity structure

> ⚠ **Belgian counsel + accountant required.** This document records
> structural intent and open questions, not a finalized legal/tax structure.
> Confirm everything below with a Belgian corporate lawyer and accountant
> before incorporating or amending anything.

## Current state

Pre-first-deal. No opco exists yet. The holding entity itself may not yet be
incorporated — confirm current status before treating any of this as fact.

## Intended structure (draft)

- **Holding entity:** a Belgian holding company (typically a BV/SRL given the
  likely scale), owning stakes in each acquired opco.
- **Opcos:** each acquired business stays (or becomes) its own legal entity
  under the holding, rather than being merged into one operating company.
  Reasons to confirm with counsel:
  - Liability isolation between portfolio companies.
  - Cleaner service-agreement and option-to-buy mechanics per
    `02-deal-structure/` (contracting entity = the holding, not an
    individual).
  - Easier eventual exit or restructuring of a single opco without touching
    the others.
- **Equity received via service agreements:** confirm whether this should be
  held directly by the holding entity or by a separate vehicle, for tax and
  liability reasons — see the ⚠ flags in
  `02-deal-structure/service-agreement-template.md`.

## Open questions for counsel/accountant

- [ ] Optimal legal form for the holding (BV/SRL vs. other) given expected
      scale and the service-fee + equity income mix.
- [ ] VAT treatment of services provided by the holding to opcos.
- [ ] Tax treatment of equity received as compensation for services
      (income vs. capital, timing of taxation).
- [ ] Social security / self-employed status implications if the founder
      works operationally inside an opco during the service phase.
- [ ] Whether a "management company" structure (common in Belgian SME/PE
      practice) is more appropriate than a pure holding for the
      service-fee income stream.
- [ ] Group VAT unit / consolidation eligibility once multiple opcos exist.

## Naming

Working name: **Holding** (placeholder — rename when ready; this affects the
GitHub repo name and all entity-name placeholders in
`02-deal-structure/` templates).
