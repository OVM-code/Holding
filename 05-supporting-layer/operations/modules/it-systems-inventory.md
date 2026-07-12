# Module: IT & systems inventory

**Recommended default: on.** Cheap to maintain, and knowing what systems an
opco actually runs on is foundational for every other module (data
integrations, security exposure, renewal cost) — worth having from day one.

## What this checks

- **What's actually in use**, not just what's paid for — shadow tools
  staff use informally are often where the real data-hygiene and security
  risk lives.
- **Ownership.** Every system should have a named owner (even if that's
  just "founder" for now) — a tool with no owner is a tool nobody notices
  when it breaks, lapses, or becomes a security gap.
- **Renewal dates and data sensitivity** — feeding into
  `legal-compliance` for contract renewal timing and into a basic security
  posture (which systems hold customer/financial/employee data, which
  don't).

## Process

1. Maintain `../templates/it-systems-inventory-template.csv`.
2. On intake or when a new system is mentioned, add it with owner, purpose,
   renewal date, and a rough data-sensitivity tag. For the ERP/accounting
   system, always record vendor + version, and for Odoo also edition
   (Enterprise/Community) and hosting (Online/Odoo.sh/on-premise) — these
   determine what the system can do and what changing it costs. Per-system
   setup knowledge for Odoo and Business Central lives in the ERP Setup
   Assistant repo (`ovm-code/erp`, `knowledge/erp/`).
3. Flag: systems with no clear owner, upcoming renewals, and any system
   handling sensitive data with no apparent access control mentioned.

## Where humans add value

Actual IT decisions — what to buy, what to consolidate, security
configuration, troubleshooting. This module is inventory and hygiene
flagging only; it is explicitly not an IT support desk.

## Efficiency note

This is a simple registry — update it incrementally as systems are
mentioned rather than attempting to discover the opco's full stack in one
pass, which isn't reliably possible without direct system access anyway.
