# Diagnostic framework: sound core vs. value trap

This is the core judgment call of the whole pipeline. Every candidate must be
run through this before any deal-structure conversation starts.

## The trap in the framing

"Previously working well, now struggling" is a dangerous framing on its own,
because it selects *toward* the businesses that look the most dramatically
in need of rescue — which correlates with the least savable ones. The set of
businesses that are appealing to acquire (tired owner, sound core) and the
set that are dramatically struggling overlap less than the "I'll save them"
romance suggests.

**Diagnostic discipline = willingness to walk away from a business you've
already bonded with.** The default posture on any candidate is skepticism: a
target is a value-trap until the evidence says otherwise.

## The three-way split

Every "sound before, struggling now" business falls into one of three buckets.
They require fundamentally different underwriting and produce fundamentally
different outcomes.

### 1. Operator gap — *most savable, best target*

The owner has checked out: retiring, burnt out, distracted, no succession
plan, running the business on inertia rather than intent. The underlying
business — product, customers, unit economics — is still sound. It is
under-managed, not broken.

**Signals:** owner age/tenure, declining but not collapsing revenue, customer
concentration stable, no recent product/process investment, staff who talk
about "how things used to run," owner explicitly wants out rather than
fighting for the business.

**Verdict label:** `operator-gap`

### 2. Cost structure uncompetitive — *in the wheelhouse, but harder*

The business is being out-competed by AI-leveraged or better-run rivals on
cost structure, not demand. The market itself is fine or growing; this
specific operation carries too much overhead, manual process, or pricing
rigidity. Efficiency work fixes it — but it requires real operational
change, not just new ownership.

**Signals:** margin compression while peers grow, manual processes doing
what software/AI now does cheaper, headcount misallocated to
overhead vs. delivery, pricing that hasn't moved with the market.

**Verdict label:** `cost-structure`

### 3. Demand structurally evaporating — *avoid*

The market for what this business sells is shrinking, and no operational
brilliance changes that. Buying here means optimizing toward a smaller death
— the diagnostic effort was correct, and the correct output is "no."

**Signals:** declining industry-wide (not just company-wide) revenue,
substitution by a structurally different product/channel, customer base
aging out with no replacement demographic, regulatory or technological
obsolescence.

**Verdict label:** `demand-decay`

## Using the labels

- A candidate's diagnosis file (`01-deals/diagnosis/<slug>.md`) must end with
  one of the three verdict labels, plus the evidence that ruled out the other
  two — not just evidence for the winning label.
- `demand-decay` verdicts still get written up and filed, not discarded — a
  well-reasoned "no" is useful pipeline discipline and a future re-check
  point if the market thesis changes.
- Mixed cases are common (e.g. operator gap *and* some cost-structure drag).
  Pick the dominant driver for the label, and note the secondary factor
  explicitly — it changes what the service-phase engagement should focus on.
