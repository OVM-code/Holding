# Claude Code wrapper template

Turns a filled-in `core-template.md` into an actual Claude Code subagent or
skill. This layer is deliberately thin — it should mostly be metadata
pointing at the core content, not new logic.

## Option A — subagent (`.claude/agents/<name>.md`)

Use this shape when the core is a single focused capability invoked
directly or by a skill — e.g. "review this contract," "fill this report."

```markdown
---
name: <kebab-case-name>
description: <one line — what it's for and when to use it proactively, written for a router deciding which agent to invoke>
tools: <minimal allowlist — only what the core's Process section actually needs, e.g. Read, Write, Edit, Glob, Grep>
---
<!-- model: sonnet default; escalate to opus for <specific step>, per model-selection-guide.md -->

<Paste the core's Role, Inputs, Process, Output, and Judgment/constraints
sections here, adapted only as needed for Claude Code phrasing — e.g. "Read
X" stays as-is since Claude Code has a Read tool by that name.>
```

Keep the `tools:` list minimal — per `efficiency-guidelines.md`, an agent
that only ever reads and writes markdown doesn't need broader tool access,
and a narrower allowlist is also cheaper to reason over.

## Option B — skill (`.claude/skills/<name>/SKILL.md`)

Use this shape when the core describes a multi-stage workflow that chains
multiple subagents, with stop conditions between stages — e.g.
`screen-deal`, `portfolio-health-check`.

```markdown
---
name: <kebab-case-name>
description: <one line — what end-to-end outcome this produces, and when to use it instead of invoking one agent directly>
---

# /<kebab-case-name>

<One paragraph: what this chains and why it's a chain and not a single
agent — name the stop conditions between stages, per
efficiency-guidelines.md's chaining bar.>

## Input

<What $ARGUMENTS is expected to be.>

## Steps

<Numbered steps, each naming which subagent it invokes and the condition
under which the skill stops instead of proceeding to the next step.>

## Rules

<Hard constraints carried over from each stage's core Judgment/constraints
section — don't silently drop them when composing multiple cores into one
skill.>
```

## Checklist before considering the wrapper done

- [ ] `tools:` (subagent) lists only what's actually used
- [ ] `description` is written for a router/founder deciding whether to
      invoke this, not a restatement of the whole core
- [ ] Model guidance comment present if this agent has any step that might
      warrant Opus (see `model-selection-guide.md`) — omit the comment
      entirely if it's a pure Sonnet task, don't pad it in for the sake of
      having one
- [ ] Nothing in the wrapper duplicates content already in the core it
      wraps
