# Module: bookkeeping oversight

**Recommended default: on.** Lowest cost, highest baseline value of any
finance module — every opco benefits from someone checking the books are
accurate and current, regardless of size or sector.

## What a 30-year controller actually checks

Not "does the P&L look plausible" — that's too late. A seasoned controller
checks the *inputs* to the P&L for the failure modes that repeat across
SMEs:

- **Timing errors**: revenue/expense booked in the wrong period (a classic
  small-business bookkeeping error that distorts trend reading).
- **Uninvoiced work**: services delivered but not yet billed — the single
  most common source of a business looking less profitable than it is.
- **Stale receivables**: invoices sent but never chased past 30/60/90 days
  — cash sitting uncollected is a silent drag nobody notices until it's a
  crisis.
- **Category drift**: expenses landing in "miscellaneous" or inconsistent
  categories month to month, which quietly breaks trend comparison.
- **Round numbers and repeats**: identical amounts recurring where they
  shouldn't (possible duplicate entries) or suspiciously round figures
  (possible estimates booked as actuals).

## Process

1. Read the period export dropped in `03-portfolio/<slug>/finance/inbox/`.
2. Check for the five failure modes above — don't just accept the totals.
3. Fill `03-portfolio/<slug>/finance/reports/<period>.md` from
   `../templates/monthly-report-template.md`.
4. Flag every hygiene issue found, even minor ones — a controller's value
   is in catching drift before it compounds, not just reporting the
   headline numbers.

## Where humans add value

Chasing an overdue customer, correcting a bookkeeping error with the
opco's actual bookkeeper, deciding whether a "miscellaneous" expense is
fine or needs re-categorizing — all human calls. This module's job is to
make sure those calls get made, not to make them.

## Efficiency note

Read only this period's export and the prior period's report for
comparison — not the full historical archive every time.
