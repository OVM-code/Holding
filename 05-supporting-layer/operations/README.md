# Operations

Back-office operations support — process documentation, vendor tracking,
quality/incident logging, capacity/scheduling visibility, IT/systems
hygiene. Split out of the original combined "marketing/IT/ops-admin"
bucket. Modular — turn on only what a given opco needs via
`03-portfolio/<slug>/active-modules.yaml`.

## Modules

| Module | Covers | Recommended default |
|---|---|---|
| `modules/process-documentation.md` | SOP capture and upkeep | Off — on once there's a process worth documenting beyond one person's head |
| `modules/vendor-supplier-management.md` | Vendor tracking, scorecards, renewal dates | Off — on once vendor count justifies systematic tracking |
| `modules/quality-incident-tracking.md` | Incident/complaint logging and pattern-spotting | Off — on for opcos where quality failures have real cost (manufacturing, service delivery with SLAs) |
| `modules/capacity-scheduling-support.md` | Capacity/scheduling visibility (not execution) | Off — on for opcos where capacity constraints are a recurring issue |
| `modules/it-systems-inventory.md` | What tooling/systems the opco runs on | On — cheap to maintain, useful from day one |

## What this department is not

- Not running the actual business — production, service delivery,
  day-to-day operational decisions stay entirely human, per `CLAUDE.md`.
  This department documents, tracks, and flags; it never executes an
  operational process.
- Not an IT support desk — the IT module is inventory and basic hygiene,
  not troubleshooting or system administration.

## Where humans add value

- **Actually running operations.** Production, delivery, scheduling
  decisions, vendor negotiations — all human. A 30-year operations
  executive's real skill is judgment under real-world constraints
  (a supplier's true reliability, which corners can't be cut); this
  department's job is making sure that judgment has current, accurate
  information to work with.
- **Any process change.** This department documents what a process *is*;
  changing how the business actually operates is a human decision, ideally
  made by whoever owns that process at the opco.
- **Vendor relationships and negotiation** — tracked here, owned by
  humans.

## Data flow (manual handoff today)

1. Founder/opco contact shares process knowledge, vendor lists, incident
   reports, or systems in use.
2. `operations` agent runs whichever modules are active, updating
   `03-portfolio/<slug>/operations/`.
3. Flags gaps (undocumented critical process, vendor with no backup,
   recurring incident pattern, stale system with no owner).

## Future integration points

`[future integration]` — not built, just anticipated:

- Vendor/procurement platforms if vendor count grows enough to justify one.
- Shared IT asset/password management tooling once the portfolio is large
  enough to need it centrally.

Do not build against any of these without being asked.
