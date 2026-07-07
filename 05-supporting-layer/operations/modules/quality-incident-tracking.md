# Module: quality & incident tracking

**Recommended default: off** — turn on for opcos where quality failures
have real cost (manufacturing defects, missed SLAs, service complaints);
skip for businesses where this overhead doesn't match the risk profile.

## What a 30-year quality function actually watches for

- **Pattern over incident.** Any single incident is a one-off; a seasoned
  quality function's real value is spotting when the *same* failure
  mode recurs — that's the signal a process, not a person, is broken.
- **Root cause, briefly, not blame.** Each logged incident should note a
  first-pass root-cause hypothesis (process gap, training gap, supplier
  issue, one-off) — enough to spot patterns across incidents, not a full
  investigation.
- **Severity-weighted attention.** A minor complaint and a safety incident
  don't get the same tracking cadence — triage by severity so attention
  goes where it matters.

## Process

1. Log incidents/complaints in `../templates/incident-log-template.csv` as
   they're reported.
2. Tag a first-pass root-cause category per incident.
3. On each review, check for recurrence of the same category — flag a
   pattern explicitly ("this is the third instance of X in two months")
   rather than just re-listing incidents individually.

## Where humans add value

Investigating an incident properly, deciding on a fix, and any judgment
about severity or liability exposure — this module logs and spots
patterns, it doesn't resolve anything.

## Efficiency note

Only re-scan for patterns when a new incident is added, not on every
unrelated check — pattern-detection is the expensive part of this module,
run it when there's new data to justify it.
