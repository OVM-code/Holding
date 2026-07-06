# Model selection guide

A Claude Pro plan gives access to multiple model tiers under a shared usage
allowance, not per-token billing. The lever isn't "minimize dollars per
call" — it's "don't spend the more expensive/limited tier's allowance on a
task the cheap tier already handles correctly." Opus produces higher-quality
reasoning on hard judgment calls, but consumes usage allowance faster and
has tighter caps than Sonnet — reserve it for tasks that actually need it.

## Default: Sonnet

Sonnet is the default for every agent and skill in this repo unless a
specific task below justifies Opus. Sonnet handles well:

- Filling structured templates from provided data (screening scorecards,
  finance reports, onboarding checklists).
- Drafting from a clear pattern (contracts from templates, job descriptions).
- Following an explicit multi-step process (the `screen-deal`,
  `portfolio-health-check` skills).
- Summarization, formatting, data extraction, flagging against a checklist.

## Escalate to Opus when the task is genuinely judgment-heavy

Concretely, in this repo, that means:

- **The diagnostic verdict itself** (`diagnostician` agent's core call:
  operator-gap vs. cost-structure vs. demand-decay). This is the one
  decision the entire investment thesis depends on getting right — it's
  explicitly the kind of ambiguous, evidence-weighing judgment call where
  a stronger model earns its cost. Recommend: run the evidence-gathering
  and write-up on Sonnet, but re-run the final verdict judgment itself on
  Opus when the call is close (the diagnosis agent should say so explicitly
  when confidence is medium/low).
- **Deal-structure terms with real money/risk at stake** — reviewing a
  drafted option-to-buy or service agreement for a specific deal that's
  about to be sent, not the generic template.
- **Any task where a wrong answer is expensive to unwind** — signing
  something, sending something external, an irreversible recommendation.
- **Synthesis across many sources** where Sonnet's summary would flatten
  important distinctions (e.g. a genuinely contested demand-decay call with
  conflicting market signals).

## Rule of thumb

> If the task has one clearly correct output reachable by following a
> process, use Sonnet. If the task **is** the process — weighing genuinely
> conflicting evidence to reach a judgment a reasonable person could
> disagree with — consider Opus, and only for the judgment step itself, not
> the surrounding drafting/formatting.

## How to set it per agent

In a Claude Code subagent's frontmatter, add a one-line comment (not a
formal field — Claude Code doesn't require a model override) stating the
default and any escalation condition, e.g.:

```
<!-- model: sonnet default; escalate to opus for low-confidence verdicts -->
```

This keeps the decision visible and reviewable rather than silently always
using the same model regardless of task difficulty.

## Anti-patterns to avoid

- Defaulting every agent to Opus "to be safe" — this burns Pro usage
  allowance fastest on the tasks that need it least (most agent calls in
  this repo are template-filling, not judgment).
- Never re-litigating a already-decided judgment call on a cheaper model
  just to save allowance — if a call is genuinely Opus-worthy, don't
  downgrade it to Sonnet under budget pressure; instead do less of the
  cheap work elsewhere.
