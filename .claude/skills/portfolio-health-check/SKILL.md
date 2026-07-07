---
name: portfolio-health-check
description: Run a consolidated status check across all active supporting-layer modules (Finance, HR, Legal, Marketing, Sales, Operations) for one portfolio company. Use when the user wants a full opco health check rather than a single department update.
---

# /portfolio-health-check

Chains the six supporting-layer department agents against a single opco,
running only the modules active for that opco, and produces one
consolidated status update. This is the main recurring entry point once an
opco exists.

## Input

`$ARGUMENTS` is the opco slug (matching `03-portfolio/<slug>/`). If omitted
and only one opco exists, use it; if multiple exist, ask which one.

## Steps

1. **Confirm the opco exists.** If `03-portfolio/<slug>/` doesn't exist,
   stop and say so — there's nothing to check yet (see
   `03-portfolio/README.md` for how an opco gets created).

2. **Read the module configuration.** Read
   `03-portfolio/<slug>/active-modules.yaml`. If it doesn't exist, tell the
   user this opco has no explicit module configuration yet — offer to
   create one from `05-supporting-layer/active-modules-template.yaml`
   before proceeding, since running every department blind wastes calls on
   modules this specific business may not need.

3. **Finance.** Invoke `finance-controller` for this opco, covering only
   its enabled modules. If no new source data has been provided for an
   enabled module that needs it, ask rather than guessing.

4. **HR.** Invoke `hr-partner` for this opco if enabled — surface any open
   onboarding items or role scorecards in progress.

5. **Legal & compliance.** Invoke `legal-compliance` for this opco,
   covering only its enabled modules.

6. **Marketing.** Invoke `marketing` for this opco, covering only its
   enabled modules.

7. **Sales.** Invoke `sales` for this opco, covering only its enabled
   modules.

8. **Operations.** Invoke `operations` for this opco, covering only its
   enabled modules.

9. **Consolidate.** Write a single summary to
   `03-portfolio/<slug>/reporting/health-check-<date>.md` with one section
   per *department that has at least one active module* — departments with
   nothing enabled are omitted from the report entirely rather than shown
   as empty sections, since "not configured for this business" isn't a
   health signal. Each active section ends in either "nothing needs
   attention" or a short list of flags. Lead the overall summary with the
   most urgent item across all active departments, not necessarily finance
   first.

## Rules

- Every department agent operates within its own scope and only runs
  modules active for this opco (see `active-modules.yaml`) — this skill
  does not ask any agent to go beyond either boundary.
- If an active module has literally no data yet, report that plainly as a
  gap rather than skipping the section silently — a health check with
  silent gaps is misleading.
- This produces a report for the founder to act on. It does not take any
  action itself (no sending emails, no filing, no purchasing).
