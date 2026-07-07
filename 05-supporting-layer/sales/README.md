# Sales

Back-office sales support — pipeline hygiene, drafting, reporting. The
actual selling (relationships, negotiation, closing) stays human, per
`CLAUDE.md`'s boundary between agentic overhead and operating work. Modular
— turn on only what a given opco needs via
`03-portfolio/<slug>/active-modules.yaml`.

## Modules

| Module | Covers | Recommended default |
|---|---|---|
| `modules/pipeline-crm-hygiene.md` | CRM/pipeline data quality, stage discipline | Off — on once there's a real pipeline to track |
| `modules/quote-proposal-drafting.md` | Quote/proposal first drafts from a brief | Off — on when quoting volume justifies drafting support |
| `modules/sales-forecasting-reporting.md` | Weighted pipeline forecast, sales reporting | Off — needs pipeline-crm-hygiene data to be meaningful |

## What this department is not

- Not a salesperson. It doesn't run discovery calls, negotiate, or close —
  those require the relationship and read-the-room judgment that's
  precisely the human-led growth work this holding is built around.
- Not a replacement for whoever owns sales at the opco — this makes their
  admin lighter and their pipeline visibility better, nothing more.

## Where humans add value

- **Every actual sales conversation.** Discovery, objection handling,
  negotiation, closing — this is relationship work, and it's also usually
  where the real diagnosis of customer needs happens. A 30-year sales
  leader's first instinct is that pipeline hygiene serves the sellers, it
  doesn't replace them.
- **Pricing and deal-specific terms.** This department can draft a
  proposal from a brief; deciding the actual price, discount, or
  concession on a specific deal is a human call informed by relationship
  context this department doesn't have.
- **Reading pipeline data with judgment.** A forecast number is a
  starting point for a conversation about which deals are real, not a
  substitute for the sales lead's own read of each deal.

## Data flow (manual handoff today)

1. Founder/opco sales contact shares pipeline data (from whatever CRM or
   spreadsheet currently in use) or a specific quote/proposal brief.
2. `sales` agent runs whichever modules are active, updating
   `03-portfolio/<slug>/sales/`.
3. Flags stale pipeline data, drafts requested documents, produces
   requested reports — for human review before anything reaches a
   customer.

## Future integration points

`[future integration]` — not built, just anticipated:

- CRM platforms commonly used by Belgian SMEs (HubSpot, Teamleader,
  Pipedrive, Odoo).

Do not build against any of these without being asked.
