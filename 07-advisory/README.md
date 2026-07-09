# Advisory board system

Turn any person — alive or dead — into a modeled advisor, then convene
topic-specific boards that discuss internally before handing the founder
advice that preserves every relevant advisor's input, including dissent.

## What an "advisor" is here

Either a **person** or a **book**:

- A person-advisor is a structured model of a real person's *documented*
  thinking: expertise, frameworks, known positions (with sources), and a
  person-specific research workflow describing how *they* would
  investigate a question (`advisors/_template.md`).
- A book-advisor is a model of a text itself — its frameworks and
  procedures with chapter references (`advisors/_template-book.md`). The
  book, not its author, holds the seat: the author's later or broader
  views are out of scope unless separately appointed. Books are often the
  *better* seat when the value is a method (a playbook, a negotiation
  system) rather than a judgment style.

A person-advisor is explicitly not the person:

- **Grounding rule:** positions trace to what the person actually
  said/wrote wherever possible, cited. Anything extrapolated to a new
  situation is marked `[extrapolation]` — the model reasoning in their
  framework, not their words.
- **Living persons:** every output involving them carries the framing
  "modeled on public record, not consulted, may not represent their
  actual view." Never present a living advisor's modeled position as an
  endorsement.
- Advisors are **data files, not agents** (`advisors/<slug>.md`). One
  generic execution pattern serves the whole roster — adding advisor #40
  costs one markdown file, no new agent. This is also what makes the
  roster portable to any model provider.

## Components

| Piece | What it does |
|---|---|
| `roster.csv` | Registry of all advisors — the dedup check lives here |
| `advisors/<slug>.md` | One file per advisor — person (`_template.md`) or book (`_template-book.md`) |
| `sessions/<date>-<topic>.md` | Log of each board session, incl. dissent and (later) your actual decision |
| `/make-advisor` | Researches a person and appoints them (via `advisor-maker` agent) |
| `/convene-board` | The full loop: seat selection → roster-gap suggestions → independent takes → contrarian attack → chair synthesis → session log |
| `board-chair` agent | Frames the question, cross-examines conflicts, synthesizes without flattening dissent |

## Board mechanics (cost-conscious by design)

1. **Seats are capped at 5 advisors + the contrarian.** More seats dilute
   accountability and multiply cost; a real board that can't decide at
   seven people can't decide at twelve.
2. **Independent takes, in parallel.** Each seated advisor answers the
   question alone — no seeing each other's positions — following their
   own research workflow. Independence first is the anti-groupthink
   mechanism; debate happens *through the chair*, afterward.
3. **The contrarian seat is structural.** Every board includes one seat
   whose only mandate is attacking the emerging consensus — strongest
   counter-case, what everyone is assuming, what failure looks like. It
   runs after the takes, before the chair. You will staff boards with
   people you admire; this seat is the correction for that.
4. **The chair synthesizes, never averages.** Output = majority view,
   named dissents with their reasoning, what would change each side's
   mind, and one actionable recommendation — with the disagreement left
   visible. Chair synthesis is the one genuinely judgment-heavy step
   (Opus-worthy when the board splits, per
   `06-agent-toolkit/model-selection-guide.md`); advisor takes run on
   Sonnet.

## Track record discipline

Advice ≠ decision. Each session log has a `founder-decision` section to
fill in afterward, and an `outcome` section for later still. Twice a year,
read the roster against the logs: an advisor who is reliably wrong for how
this portfolio actually behaves gets revised or retired — boards improve
by pruning, not only by appointing.

## Staleness

Living advisors keep publishing and changing their minds. `roster.csv`
tracks `last_researched`; `/make-advisor <name> --refresh` re-runs the
research and updates the file. Treat an advisor file older than ~a year as
stale for fast-moving domains.

## Boundary with the rest of the repo

Departments (`05-supporting-layer/`) *do* recurring work. Advisors *think
about decisions* — strategy, deals, hard tradeoffs — and never touch opco
data or execute anything. A board can be convened on a deal (e.g. before
a structuring decision), and its session log then sits alongside, never
instead of, the diagnosis.
