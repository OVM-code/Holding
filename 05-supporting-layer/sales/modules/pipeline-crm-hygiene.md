# Module: pipeline / CRM hygiene

**Recommended default: off** until there's a real pipeline (more than a
handful of active deals) worth tracking systematically.

## What a 30-year sales-ops discipline checks

- **Stage discipline, not stage optimism.** The single most common CRM
  failure is deals sitting in an advanced stage long after they've gone
  cold — a seasoned sales-ops function checks *time in stage*, not just
  current stage, and flags deals stalled well past the opco's typical
  cycle time for that stage.
- **Data completeness that actually matters.** Not every field —
  specifically: is there a next action and date on every open deal, is the
  deal value realistic (not a placeholder), is there an actual decision
  maker identified. A pipeline full of deals with no next action is a
  pipeline that isn't being worked.
- **Duplicate and dead-deal cleanup.** Old deals that will never close
  clutter the pipeline and distort every downstream number — flag for
  archival rather than deletion (history has value).

## Process

1. Review `03-portfolio/<slug>/sales/pipeline.csv` (create from
   `../templates/pipeline-hygiene-checklist-template.md`'s structure if
   this is the first run).
2. Flag: deals with no next action/date, deals stalled beyond typical
   cycle time for their stage, deals with placeholder/missing values.
3. Do not reassign, close, or delete deals — flag for the deal owner to
   act on.

## Where humans add value

Actually working each deal, judging whether a stalled deal is genuinely
dead or just slow, and any decision about deal ownership or reassignment.

## Efficiency note

Diff against the last hygiene check rather than re-flagging every deal
from scratch each time — only surface what changed or what's newly stale.
