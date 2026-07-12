# Expert questions — deal diagnosis

The questions a veteran SME acquirer asks a target and its owner. These
feed the three-way verdict in `diagnostic-framework.md` — each section
notes which bucket it discriminates for. The `diagnostician` agent uses
these to structure evidence; most answers come from human conversations
with the owner, staff, and customers, so unanswered ones become the
founder's meeting agenda.

## Questions to the owner (what they say)

- Walk me through your last normal week. (Checked-out owners describe a
  week from five years ago, or can't describe one at all → operator gap.)
- What did you stop doing in the last three years? (The honest answer
  maps the operator gap precisely — it's the job description of the
  replacement effort.)
- Who was your last significant new customer, and how did they find you?
  (Long silence → demand question; "they found us" → sound demand,
  dormant sales.)
- What would you do with this business if you were 35 again? (Rich,
  specific answer → the core is sound and they know the moves; vague
  answer → maybe there are no moves → demand-decay signal.)
- Why is this business worth buying? Then wait. (Owners of sound
  businesses talk about customers and capability; owners of dying ones
  talk about the past and the building.)

## Questions about the owner (what the evidence says)

- When did prices last change? (Years of frozen prices with retained
  customers = hidden margin + operator gap; it's the cheapest fix in the
  playbook.)
- What does the owner still personally control that they shouldn't —
  quotes, bank, keys, passwords, every hire? (Measures both the gap and
  the transition risk.)
- Is decline gradual and recent (fatigue) or long and accelerating
  (market)? Plot revenue by year and *look at the shape.*

## Discriminating cost-structure from demand-decay

(The dangerous confusion — both present as "we earn less every year.")

- Are competitors' businesses growing? Name three and check. If yes:
  demand exists, this operation is losing share → cost-structure or
  commercial gap, fixable. If every local peer is shrinking too →
  demand-decay, walk.
- Did volume decline, or did margin decline at stable volume? Volume
  down = demand or sales problem; margin down = cost or pricing problem.
  They need opposite medicine.
- Who took the customers that left — a cheaper rival (cost), a different
  solution entirely (decay), or nobody, they just stopped buying the
  category (decay, terminal)?
- What do the youngest customers on the books look like? A business whose
  newest customers are also old is aging out with its demand — the
  clearest single decay signal there is.

## Questions about the systems (what the stack says)

(Belgian SMEs mostly run Odoo, Exact Online, or a Microsoft-channel ERP like
Business Central — or nothing but the external accountant's ledger. The stack
is diagnostic evidence *and* an integration-cost line item. Per-system setup
knowledge lives in the ERP Setup Assistant repo, `ovm-code/erp`.)

- What do you run the business on — ERP, accounting package, or Excel and
  the accountant? (No system of record at this size usually reads
  operator-gap: the admin muscle atrophied with the owner. It also means
  the back-office integration starts from zero — price that in.)
- If Odoo: which edition (Enterprise/Community), which version, hosted
  where, and who maintains the customizations? (An unmaintained, heavily
  customized Community install several versions behind is a hidden
  re-implementation cost and often a one-freelancer key-person risk.)
- Are they sending structured Peppol e-invoices? (Mandatory for Belgian
  B2B since January 2026 — a target that still isn't compliant a year in
  tells you how the rest of the admin is run.)
- Does the ERP actually match reality — is stock in the system the stock
  on the floor, are margins per job visible? (A configured-but-ignored
  system is operator-gap evidence; a system that never could answer these
  is a cost-structure lever waiting to be pulled.)

## Questions to staff (with the owner absent)

- What would you fix first if it were your company? (Staff always know.
  The answer also tests bucket 2 — they'll name the inefficiency.)
- What do customers complain about? (Delivery/communication complaints →
  fixable ops; "nobody needs this like they used to" → decay from the
  people who'd know first.)
- Has anyone good left lately, and where did they go? (Good people leaving
  for competitors = the market's alive and this shop is losing; leaving
  the sector = decay signal.)

## The self-discipline questions (for the founder, about the founder)

- Have I already imagined myself running this? Then I've stopped
  diagnosing. Name the attachment, then re-read the evidence against the
  verdict I *don't* want.
- What evidence would make me walk away — and have I actually looked for
  it, or only at what confirms the rescue story?
- If this exact business were in another city, owned by someone I'd never
  met, would I still want it at this price?
