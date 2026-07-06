# Portfolio

Empty until the first acquisition closes (pipeline stage `acquired` in
`01-deals/pipeline.csv`).

## When an opco is acquired

1. Create `03-portfolio/<slug>/` (reuse the candidate's slug from
   `01-deals/candidates/`).
2. Carry over the diagnosis and service-phase history for continuity:
   - `01-deals/diagnosis/<slug>.md` → link or copy into
     `03-portfolio/<slug>/diagnosis-history.md`.
3. Scaffold inside the new folder:
   - `overview.md` — what the business is, org chart, key people.
   - `reporting/` — recurring financial/KPI reports (cadence TBD per
     `04-holdco/governance.md`).
   - `growth-plan.md` — the human-led operating priorities coming out of the
     diagnosis (what made it `operator-gap` or `cost-structure`, and what the
     plan is to fix it).
4. Update `pipeline.csv` row to stage `acquired`.

No opco folders exist yet — this file is the placeholder and the checklist
for creating the first one.
