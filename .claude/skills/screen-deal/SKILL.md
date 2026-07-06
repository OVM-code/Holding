---
name: screen-deal
description: Run a new or existing acquisition candidate through the full deal pipeline — screening, diagnosis, and (if savable) deal-structure drafting. Use when the user wants to process a candidate end-to-end rather than one stage at a time.
---

# /screen-deal

Chains the three deal-pipeline subagents so a candidate moves from raw input
to a routed outcome in one pass, stopping at the first point that needs the
founder's judgment.

## Input

`$ARGUMENTS` is either:
- A description of a new candidate (company name, sector, source, any known
  facts) — pasted text, a broker teaser, a PDF path, etc.
- The slug of an existing candidate already in `01-deals/candidates/` to
  re-run or continue from its current stage.

## Steps

1. **Determine starting point.** Check `01-deals/pipeline.csv` for an
   existing row matching this candidate (by slug or company name). If none
   exists, this is a fresh intake starting at `sourced`.

2. **Screening.** If stage is `sourced` or earlier, invoke the `deal-scout`
   agent with the input. Read its recommendation:
   - If "disqualify" → stop here. Report the disqualification reason to the
     user. Do not proceed to diagnosis.
   - If "need more data" → stop here. Report exactly what's missing and ask
     the user for it before continuing.
   - If "proceed to full diagnosis" → continue to step 3.

3. **Diagnosis.** Invoke the `diagnostician` agent on the candidate. Read the
   verdict:
   - `demand-decay` or another hard disqualifier triggered → stop here.
     Report the verdict and reasoning. Pipeline stage is already set to
     `disqualified` by the agent.
   - `operator-gap` or `cost-structure` → continue to step 4.
   - Low confidence verdict → stop here and report to the user rather than
     auto-proceeding to structuring on a shaky diagnosis.

4. **Structuring.** Invoke the `deal-structurer` agent to draft the LOI,
   service agreement, and option-to-buy terms based on the diagnosis.

5. **Report back to the user**: current pipeline stage, the verdict and its
   confidence, links to every file created or updated, and what founder
   decision (if any) is needed next — e.g. filling in commercial terms left
   as TODOs, or deciding whether to actually make contact.

## Rules

- Never skip a stage's stop condition to "save time" — the whole point of
  this pipeline is that a bad verdict or missing data halts progress instead
  of quietly getting waved through.
- Never contact an owner or send any drafted document — this skill only
  produces internal working files. Outreach is a separate, explicit human
  decision.
- If `$ARGUMENTS` is ambiguous (e.g. too little information to even attempt
  screening), ask the user for the minimum needed rather than guessing.
