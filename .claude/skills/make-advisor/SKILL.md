---
name: make-advisor
description: Research any real person (alive or dead) and appoint them as a modeled advisor in the advisory board system, or refresh an existing stale advisor. Use when the user names a person they want on their advisory roster.
---

# /make-advisor

Thin entry point over the `advisor-maker` agent.

## Input

`$ARGUMENTS` is the person's name, plus optionally: why the user wants
them (which domains/decisions), any context the user can supply that the
public record won't have, or `--refresh` to re-research an existing
advisor.

## Steps

1. Invoke `advisor-maker` with `$ARGUMENTS`.
2. Relay: who was appointed (or refreshed), their domains, key sources,
   and anything unverifiable. If the agent found the person already on the
   roster, or found the public record too thin to model honestly, relay
   that instead — don't push past it.

## Rules

- If `$ARGUMENTS` is just a name with no hint of why, proceed anyway (the
  research will surface their domains) — but tell the user the advisor's
  domains at the end so they can confirm the fit they had in mind.
