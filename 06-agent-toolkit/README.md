# Agent toolkit

A reusable kit for building any new agent, skill, or automation for this
project — deal pipeline, supporting layer, or anything not yet imagined —
without re-deriving the same design decisions each time.

This exists because the repo will keep growing new agents (see
`.claude/agents/`, `.claude/skills/`). Without a shared standard, each new
one reinvents scope boundaries, model choice, and token discipline from
scratch. This toolkit is that standard.

## What's here

| File | Use it to decide |
|---|---|
| `model-selection-guide.md` | Sonnet or Opus for this agent's tasks |
| `efficiency-guidelines.md` | How to keep this agent's token/context use lean |
| `portability-guide.md` | How to write it so it isn't locked to Claude |
| `templates/core-template.md` | The actual instruction content (model-agnostic) |
| `templates/claude-code-wrapper-template.md` | How to turn the core into a `.claude/agents/*.md` subagent or `.claude/skills/*/SKILL.md` |

## How to build a new agent or automation

1. **Write the core first, in `templates/core-template.md`'s shape.** Role,
   scope, inputs, process, output, constraints — in plain language, no
   Claude-specific syntax. This is the part worth keeping if you ever move
   off Claude.
2. **Run it through `efficiency-guidelines.md`.** Does it re-read files it
   doesn't need? Does its output format waste tokens? Does it need to be a
   multi-step chain, or does one pass do the job?
3. **Pick the model per `model-selection-guide.md`.** Default Sonnet;
   justify Opus in one line if you use it.
4. **Wrap it per `templates/claude-code-wrapper-template.md`** into either
   a subagent (`.claude/agents/<name>.md`) or a skill
   (`.claude/skills/<name>/SKILL.md`), depending on whether it's a single
   focused capability (subagent) or a multi-stage workflow chaining several
   capabilities (skill).
5. **Check portability** per `portability-guide.md` before you consider it
   done — the wrapper should be the only Claude-specific layer.

Or: use the `agent-builder` subagent / `/new-agent` skill to do steps 1-4
for you from a plain description of what you want automated — both apply
this toolkit's rules automatically.

## Why this matters for a Pro-plan, cost-conscious setup

You're running this on Claude Pro usage allowances, not metered API billing
— but the discipline is the same discipline that keeps API costs down if
this ever moves there, and it's what keeps a Pro plan's usage caps from
being the bottleneck on how much you can actually get done. See
`00-thesis/operating-model.md`: agents are overhead, and overhead should be
cheap by construction, not by accident.
