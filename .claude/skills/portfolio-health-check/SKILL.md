---
name: portfolio-health-check
description: Run a consolidated status check across finance, HR, legal/compliance, and commercial-ops for one portfolio company. Use when the user wants a full opco health check rather than a single department update.
---

# /portfolio-health-check

Chains the four supporting-layer department agents against a single opco and
produces one consolidated status update. This is the main recurring
entry point once an opco exists.

## Input

`$ARGUMENTS` is the opco slug (matching `03-portfolio/<slug>/`). If omitted
and only one opco exists, use it; if multiple exist, ask which one.

## Steps

1. **Confirm the opco exists.** If `03-portfolio/<slug>/` doesn't exist,
   stop and say so — there's nothing to check yet (see
   `03-portfolio/README.md` for how an opco gets created).

2. **Finance.** Invoke `finance-controller` for this opco. If no new source
   data has been provided for this check, ask whether the user has a fresh
   export/figures, or whether this should just report the latest existing
   data on file.

3. **HR.** Invoke `hr-partner` for this opco — surface any open onboarding
   items or role scorecards in progress under `03-portfolio/<slug>/hr/`.

4. **Legal & compliance.** Invoke `legal-compliance` for this opco —
   specifically, scan `03-portfolio/<slug>/legal/compliance-calendar.csv`
   for anything due within 60 days.

5. **Commercial ops.** Invoke `commercial-ops` for this opco — flag anything
   stale in the marketing calendar or IT systems inventory.

6. **Consolidate.** Write a single summary to
   `03-portfolio/<slug>/reporting/health-check-<date>.md` with one section
   per department, each ending in either "nothing needs attention" or a
   short list of flags. Lead the overall summary with the most urgent item
   across all four departments, not necessarily finance first.

## Rules

- Every department agent operates within its own scope (see each agent's
  definition) — this skill does not ask any of them to go beyond it.
- If a department has literally no data yet (e.g. no finance export has ever
  been provided), report that plainly as a gap rather than skipping the
  section silently — a health check with silent gaps is misleading.
- This produces a report for the founder to act on. It does not take any
  action itself (no sending emails, no filing, no purchasing).
