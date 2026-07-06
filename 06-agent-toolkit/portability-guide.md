# Portability guide

Every agent/skill in this repo should be built as two layers: a
**model-agnostic core** (the actual thinking — role, scope, process,
judgment rules) and a thin **Claude Code wrapper** (frontmatter, tool names,
file paths specific to this harness). If Claude Code ever isn't the tool,
only the wrapper needs replacing.

## Why this split, concretely

`.claude/agents/diagnostician.md` today has YAML frontmatter (`name`,
`description`, `tools`) that only means something to Claude Code, and body
instructions that are pure reasoning — read the framework, weigh three
hypotheses, write a falsifiable verdict. Nothing in that body instructs a
Claude-specific tool-call syntax; it's written as instructions any capable
model could follow given the same file access. That's the target shape for
everything new.

## Writing the core (model-agnostic)

Use `templates/core-template.md`. Rules:

- **No tool-call syntax.** Say "read file X" or "update file Y," not a
  specific function-call format — different platforms invoke file access
  differently.
- **No Claude-specific vocabulary** ("subagent," "skill," "artifact") inside
  the core instructions themselves — those are Claude Code's names for the
  wrapper, not part of the task logic.
- **State the model-selection guidance as a plain rule**, not a
  frontmatter field — e.g. "use a stronger/more careful reasoning pass for
  the verdict step" reads correctly regardless of which vendor's naming
  scheme ends up running it.
- **Reference repo files by relative path.** Paths are portable; a
  Claude-specific memory/context mechanism isn't.

## Writing the wrapper (Claude Code-specific)

Use `templates/claude-code-wrapper-template.md`. This is where
Claude-specific plumbing lives: YAML frontmatter, the `tools:` allowlist,
subagent vs. skill file placement. Keep it short — it should mostly be
metadata pointing at (or containing verbatim) the core instructions, not new
logic.

## Porting to another provider

| This repo's mechanism | OpenAI equivalent | Gemini equivalent | Plain fallback |
|---|---|---|---|
| Claude Code subagent (`.claude/agents/*.md`) | A custom GPT / Assistants API assistant with the core as its system prompt | A Gemini Gem / system-instruction-configured session | Any chat session, core pasted as the first message |
| Claude Code skill (`.claude/skills/*/SKILL.md`) | A saved prompt chain / GPT Action sequence | A Gemini "saved prompt" or scripted multi-turn flow | Manually run each stage's core in sequence, pasting prior output forward |
| `tools:` allowlist (Read/Write/Edit/Glob/Grep) | File-search / Code Interpreter tool enablement | Function-calling tool config | Manual copy-paste of file contents into the chat |
| Pipeline/CSV files this repo reads/writes | Same files — plain Markdown/CSV are already portable | Same | Same |

The templates and data (everything under `00-thesis/` through
`05-supporting-layer/`) are already provider-agnostic — they're plain
Markdown/CSV with no Claude-specific formatting. Portability risk lives
entirely in the `.claude/agents/` and `.claude/skills/` wrappers, which is
exactly why the core/wrapper split matters.

## When strict portability isn't worth it

Don't over-engineer this — if a task is a one-off, quick utility you'll
only ever run in Claude Code, write it directly as a subagent without
maintaining a separate core file. The core/wrapper split earns its cost for
agents you expect to matter long-term (the deal pipeline and supporting-layer
agents already built) or that you can imagine needing on a different
platform later — not for every trivial helper.
