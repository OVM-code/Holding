# Marketing

Split out of the original combined "marketing/IT/ops-admin" bucket once
enough was needed from each to warrant its own department. Modular — turn
on only what a given opco needs via
`03-portfolio/<slug>/active-modules.yaml`.

## Modules

| Module | Covers | Recommended default |
|---|---|---|
| `modules/content-brand-calendar.md` | Content/marketing calendar upkeep, brand consistency | Off — on once there's an active marketing motion to track |
| `modules/digital-presence-audit.md` | Website/SEO/social hygiene check | Off — useful periodically even for low-marketing-activity opcos |
| `modules/campaign-performance-tracking.md` | Campaign results tracking, basic attribution hygiene | Off — needs active paid/organic campaigns to be worth running |

`expert-questions.md` holds the questions a veteran marketing operator asks
before spending a euro — starting with "where did the last ten customers
actually come from," which is answered by talking to customers, not
analytics.

## What this department is not

- Not a marketing agency. It doesn't create brand strategy, write final
  campaign copy for publication, or make positioning decisions — it drafts,
  organizes, and keeps things current so a human (founder, or eventually a
  marketing hire) can move faster.
- Not running the opco's actual customer relationships or brand voice
  decisions — see `CLAUDE.md`'s boundary between agentic overhead and
  human-led operating/growth work.

## Where humans add value

- **Brand voice and positioning** — what the business actually stands for
  and how it wants to be perceived. This department can draft *within* an
  established voice, not invent one.
- **Anything published externally** — every piece of content, every
  campaign, gets human review before it goes out. This department prepares,
  it doesn't publish.
- **Relationship-based marketing** — referral networks, local
  partnerships, trade-show presence — inherently human, and often the
  highest-leverage marketing channel for a Belgian SME anyway. A 30-year
  marketing operator knows the calendar and the metrics are overhead;
  the relationships are the actual growth engine.

## Data flow (manual handoff today)

1. Founder/opco contact shares what's currently running (channels,
   campaigns, website state, brand guidelines if any exist).
2. `marketing` agent runs whichever modules are active, updating
   `03-portfolio/<slug>/marketing/`.
3. Flags anything stale or inconsistent for the founder to act on or hand
   to whoever owns marketing execution at the opco.

## Future integration points

`[future integration]` — not built, just anticipated:

- CRM/marketing platforms commonly used by Belgian SMEs (HubSpot,
  Mailchimp, Teamleader).
- Website analytics (GA4, Plausible) and basic SEO tooling for the
  digital-presence-audit module.

Do not build against any of these without being asked.
