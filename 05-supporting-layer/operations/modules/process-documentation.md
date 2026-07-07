# Module: process documentation

**Recommended default: off** — turn on once a process exists that lives only
in one person's head; documenting a trivial or already-clear process is
pure overhead.

## What a 30-year ops practice documents (and how)

- **The processes that are actually risky if undocumented** — first: what
  breaks the business if the one person who knows it is unavailable for a
  week. Document that first, not whatever's easiest to write down.
- **SOPs written for the person doing the task, not for an audit.**
  Numbered steps, the actual tools/systems used, the decision points where
  judgment is needed (and what judgment to apply) — not a vague policy
  statement. A good SOP is something a competent new hire could follow.
- **Version-dated, not evergreen-assumed.** Processes drift; a seasoned ops
  function treats every SOP as provisionally current, checked against
  reality periodically, not written once and trusted forever.

## Process

1. Take process knowledge from whoever runs it (interview-style intake, or
   from existing rough notes).
2. Draft an SOP using `../templates/sop-template.md` — numbered steps,
   explicit tools/systems, explicit decision points.
3. Have the actual process owner review before treating it as current —
   this module drafts from what it's told, it can't verify the process
   matches reality without that review.

## Where humans add value

Actually knowing and running the process, correcting the draft where it's
wrong, and deciding when a process should change (as opposed to just being
documented as-is).

## Efficiency note

Prioritize documenting the highest-risk-if-undocumented processes first
(per the note above) rather than attempting comprehensive documentation of
every process at once — this is a targeted module, not a company-wide
audit by default.
