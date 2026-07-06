# Core instruction template (model-agnostic)

Fill this in first, before any Claude Code-specific wrapper. Plain language
only — no tool-call syntax, no platform-specific vocabulary. This should be
usable, with minor adaptation, in any capable chat model given the same file
access.

---

## Role

One sentence: what this agent/automation is responsible for, and what it is
explicitly not responsible for (the boundary matters as much as the scope).

## When to use it

The trigger condition — what situation or request should cause this to run.

## Inputs

- What files/data it needs, named specifically (paths, not "relevant
  files").
- What it should do if a required input is missing (stop and ask, proceed
  with a gap noted, etc. — pick one explicitly).

## Process

Numbered steps. Each step should be concrete enough that a different model
would take the same actions given the same instructions — avoid vague verbs
like "analyze" without saying what output that analysis produces.

1.
2.
3.

## Output

- Where the output goes (file path, or direct response).
- Its format (template reference, or described structure).
- What "done" looks like — the check that lets this agent's work be verified
  without re-doing it.

## Judgment / constraints

- The specific boundary this agent must not cross (e.g. "flags, never
  concludes"; "drafts, never sends"; "never fabricates data not in the
  source").
- The default posture on ambiguity (e.g. skepticism, ask-don't-assume).

## Reasoning depth

State in plain terms whether this task is "follow the process, one correct
answer" (cheaper model, single pass) or "weigh genuinely conflicting
evidence to reach a judgment call" (warrants a stronger reasoning pass for
that specific step). See `06-agent-toolkit/model-selection-guide.md`.

## Efficiency notes

Anything specific to this agent worth flagging per
`06-agent-toolkit/efficiency-guidelines.md` — e.g. "don't re-read the full
compliance calendar, only rows due within 60 days."
