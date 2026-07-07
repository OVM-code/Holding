# Module: IP & brand protection

**Recommended default: off** — only relevant once an opco has real
trademark, brand, or proprietary-content exposure worth protecting.
Turning this on for a business with no meaningful IP wastes a module slot.

## What a 30-year IP practice checks that founders miss

- **Registered vs. unregistered rights.** Belgian/EU trademark protection
  requires registration (Benelux Office for Intellectual Property /
  EUIPO) — an SME's brand name and logo are often entirely unregistered,
  meaning genuinely undefended.
- **Domain/brand consistency drift** — a business operating under a
  slightly different name/logo across its website, signage, and legal
  documents, which weakens any protection it does have.
- **Renewal dates** for any registered marks — trademarks lapse if
  renewals are missed, silently.
- **Employee/contractor IP assignment** — work product created by staff or
  freelancers needs clear assignment terms; without them, ownership can be
  genuinely ambiguous.

## Process

1. Maintain `03-portfolio/<slug>/legal/ip-register.csv` — every registered
   mark, its status, and renewal date.
2. On intake, flag any brand/name asset in active use that isn't
   registered — the note "worth registering" is enough, not a
   registration filing (that needs actual counsel/an IP agent).
3. Check employee/contractor agreements (via `hr` and `contract-review`
   modules) for IP assignment language when reviewing them.

## Where humans add value

Filing a registration, pursuing an infringement, deciding what's actually
worth protecting given cost — all human/counsel calls. This module's job is
noticing exposure, not resolving it.

## Efficiency note

This is an occasional-audit module, not a continuous-monitoring one — run
it when onboarding an opco and periodically (e.g. annually) thereafter, not
on every health check.
