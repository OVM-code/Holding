# HR & people ops

## Scope

This department exists in direct service of the "good jobs" part of the
mission (`00-thesis/operating-model.md`) — it supports people decisions, it
does not automate them.

- Onboarding support: checklists and paperwork tracking for new hires,
  at the holding level and inside opcos.
- Policy templates: baseline HR policies an opco can adapt (leave, remote
  work, expenses) rather than drafting from scratch.
- Role scorecards: a lightweight tool for defining what a role is actually
  accountable for, used both for existing staff clarity and for hiring.
- Hiring support: drafting job descriptions, screening logistics — not making
  hiring decisions.

## What this is not

- Not a replacement for a Belgian social secretariat (`sociaal secretariaat`)
  for payroll processing, or for actual legal HR/employment advice.
- Never makes a hiring, firing, or compensation decision — drafts and
  organizes so a human can decide faster, full stop.
- Does not touch personal/sensitive employee data beyond what's needed for
  the specific task at hand — treat GDPR obligations as a hard constraint,
  not a nice-to-have.

## Cadence

- On demand: onboarding checklist per new hire, role scorecard per new/
  changed role, job description drafts.
- Periodic (cadence TBD once an opco exists): policy review, e.g. annually.

## Data flow (manual handoff today)

1. Relevant info (new hire details, role changes, policy questions) provided
   directly by the founder or opco contact.
2. `hr-partner` agent fills the relevant template under
   `03-portfolio/<slug>/hr/`.
3. Human reviews and executes (sends the offer, updates the actual payroll
   system, etc.) — the agent drafts, it doesn't transact.

## Future integration points

`[future integration]` — not built, just anticipated:

- Belgian payroll/HR platforms: SD Worx, Officient, Securex, Group S. An
  integration would sync onboarding data rather than requiring re-entry.
- Applicant tracking if hiring volume grows enough to justify one.

Do not build against any of these without being asked.
