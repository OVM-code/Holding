# Module: tax & compliance coordination

**Recommended default: off** until the opco's accountant relationship is
established — this module coordinates with a professional, it doesn't
replace the need for one.

> ⚠ Never a source of tax advice. This module tracks deadlines and preps
> information for the opco's actual accountant/tax advisor — it does not
> determine tax positions.

## What this module actually does

- Maintains a tax-obligation calendar per opco (VAT filing frequency,
  corporate tax deadlines, provisional tax payments, annual accounts
  filing) — feeding into `05-supporting-layer/legal-compliance/`'s broader
  compliance calendar rather than duplicating it.
- Prepares a clean information packet ahead of each deadline (relevant
  figures, prior period's filing for reference) so the opco's accountant
  gets what they need faster, without doing the tax work itself.
- Flags upcoming deadlines early enough that "the accountant needs
  something from us" doesn't become a fire drill.

## Process

1. Confirm the opco's tax obligation calendar exists (create from the
   compliance calendar template in `05-supporting-layer/legal-compliance/`
   if not, tagged as tax-related).
2. Ahead of each deadline (default: 3 weeks out), assemble the information
   packet from available bookkeeping-oversight reports.
3. Flag to the founder what's needed and when, and confirm the
   accountant/tax advisor has what they asked for.

## Where humans add value

The actual tax position, filing, and any judgment call about tax treatment
— entirely the accountant/tax advisor's domain. This module's only job is
making sure nothing is late and nothing needed gets forgotten.

## Efficiency note

This module is fundamentally a calendar + packet-assembly task — keep it
mechanical. It should never attempt to reason about tax treatment itself,
which would be both out of scope and a waste of a reasoning-heavy model
call on a task that isn't actually a judgment call for this agent to make.
