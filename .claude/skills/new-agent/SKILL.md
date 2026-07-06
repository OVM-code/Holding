---
name: new-agent
description: Scaffold a new agent or skill for this repo from a plain description of what you want automated, applying the agent toolkit's model-selection and efficiency rules automatically. Use when the user wants to add a new recurring automation rather than a one-off answer.
---

# /new-agent

Thin entry point over the `agent-builder` subagent — exists so building a
new agent/skill is a one-line command instead of remembering to invoke the
right subagent.

## Input

`$ARGUMENTS` is a plain description of what should be automated: what
triggers it, what it should do, what it should produce. Doesn't need to be
formatted — `agent-builder` will structure it.

## Steps

1. Invoke `agent-builder` with `$ARGUMENTS` as the description of the
   desired automation.
2. Relay its result: what was created (subagent or skill, and where), its
   model-selection note, and any scope flag it raised.

## Rules

- If `$ARGUMENTS` is missing or too vague to identify even a rough scope
  (what triggers it, what it produces), ask for that before invoking
  `agent-builder` — don't let it guess at scope from nothing.
