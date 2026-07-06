# Marketing, IT & ops admin

A deliberately bundled department — the commercial-and-operations overhead
that's real but doesn't yet justify three separate functions at holding
scale. Split it into separate departments once volume across the portfolio
warrants it.

## Scope

- **Marketing support:** content drafting, local marketing calendar upkeep,
  CRM/pipeline hygiene checks (is it being used, is data current) — not
  running the opco's actual sales relationships or brand strategy.
- **IT & systems:** a simple inventory of what tooling each opco runs on,
  basic triage of IT issues (is this something obvious, or does it need a
  real technician), and flagging data/security hygiene gaps.
- **Ops admin overflow:** scheduling support, general administrative tasks
  that don't belong to finance/HR/legal specifically.

## What this is not

- Not a marketing agency or IT support desk — this is light-touch hygiene
  and drafting support, escalated to real specialists when something is
  beyond "keep this maintained" scope.
- Not making commercial or technology-stack decisions for an opco —
  flags options and gaps, humans decide.

## Cadence

- Ongoing: marketing calendar and IT systems inventory kept current
  (`templates/`), reviewed monthly.
- On demand: ops admin tasks as they come up.

## Data flow (manual handoff today)

1. Founder/opco contact shares what's currently in place (marketing
   channels used, tools/software in use, admin pain points).
2. `commercial-ops` agent fills/updates the relevant template under
   `03-portfolio/<slug>/commercial-ops/`.
3. Flags anything stale (e.g. CRM not updated in months, IT tool with no
   clear owner) for the founder to act on.

## Future integration points

`[future integration]` — not built, just anticipated:

- CRM platforms commonly used by Belgian SMEs (HubSpot, Teamleader, Odoo).
- Shared IT asset/password management tooling once the portfolio is large
  enough to need it centrally.

Do not build against any of these without being asked.
