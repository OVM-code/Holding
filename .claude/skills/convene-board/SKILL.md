---
name: convene-board
description: Convene an advisory board on any question - seats the relevant advisors from the roster, suggests missing ones, runs independent takes plus a contrarian pass, and delivers chair-synthesized advice that preserves dissent. Use when the user wants advice on a decision or topic, not routine department work.
---

# /convene-board

The full advisory loop from `07-advisory/README.md`. A chain, not a single
agent, because each stage gates the next: no seats → nothing to run;
consensus emerging → contrarian attacks it; only then is synthesis worth
paying for.

## Input

`$ARGUMENTS` is the question or topic. If it's too vague to advise on
("thoughts on growth?"), sharpen it with the user first — one round, not
an interrogation.

## Steps

1. **Seat selection.** Read `07-advisory/roster.csv` and each candidate
   advisor's `domains`. Seat the advisors genuinely relevant to this
   question — max 5. Relevance beats seniority: an empty seat is better
   than a padding seat.

2. **Roster-gap check.** Ask: who are the obvious minds — alive or dead —
   *and which books* are the obvious playbooks on this specific question,
   and are they on the roster? (Suggest a book over its author when the
   value is the method rather than the person's judgment.) (Quick
   WebSearch only if the domain is outside what the roster covers.) For
   each missing person worth having: name them, one line on why, and
   offer `/make-advisor`. **Do not auto-appoint.** If the user appoints
   someone now, seat them; otherwise proceed with the current roster and
   note the gap in the session log.

3. **Create the session file** at
   `07-advisory/sessions/<date>-<topic-slug>.md` from
   `sessions/_template.md`, with the question and seats filled in.

4. **Independent takes — parallel, blind.** For each seated advisor,
   spawn one agent (in a single batch, so they run concurrently) with:
   the advisor's file path, the question, and this instruction: *"Read
   your advisor file. Follow its person-specific research workflow for
   this question. Answer in that person's frameworks, citing documented
   positions and marking everything else `[extrapolation]`. State what
   would change your mind. You have not seen any other advisor's
   position."* Write each take into the session file.

5. **Contrarian seat.** After all takes are in, spawn one agent with the
   full set of positions and the mandate: attack the emerging consensus —
   strongest counter-case, the assumption every position shares, what
   failure looks like in practice. The contrarian has no persona; it
   argues from evidence, not style.

6. **Chair synthesis.** Invoke `board-chair` on the session file.

7. **Deliver.** Relay the chair's **Founder brief** (the plain-language
   layer), not the dense synthesis — the synthesis stays in the session
   file as the audit trail for anyone who wants the full reasoning.
   Remind the user the session log has a `founder-decision` section to
   fill in once they've decided — that's how the roster earns a track
   record.

## Rules

- Max 5 advisor seats + 1 contrarian, always. If more seem relevant,
  pick the 5 whose *methods* differ most — diversity of method beats
  quantity of prestige.
- Living advisors' positions always carry the modeled-not-consulted
  framing, in the session file and in the delivered advice.
- Advisor takes run on the default model; the chair escalates per its own
  model note only when the board genuinely splits.
- This skill produces advice and a log. It decides nothing, and it never
  triggers actions in the deal pipeline or supporting layer — if advice
  implies action, the founder takes it explicitly.
