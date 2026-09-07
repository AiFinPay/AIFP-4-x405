# x405 / AIFP-4 Roadmap

## Phase 0 — x405 standard definition

- Reposition AIFP-4 as the x405 universal financial capability protocol for AI Agents.
- Define Agent Financial Profile, Sponsor, Compliance Attestation, Delegated Authority, and Payment Credential objects.
- Preserve v0.1 treasury compatibility as an enterprise profile.
- Publish core specification, architecture, security, compliance, OpenAPI, JSON Schemas, and conformance profiles.
- Define x405 naming and x402 interoperability rules.

## Phase 1 — Agent Financial Profile sandbox

- AIFP-3 Agent Passport binding.
- Sponsor-to-Agent delegation.
- Reusable provider onboarding references where legally/provider permitted.
- Financial-profile lifecycle.
- Credential registry and revocation.
- Policy-as-code and approval engine.
- Universal Payment Intent API.
- Signed Universal Payment Receipt.

## Phase 2 — Card + digital-asset pilot

- One contracted issuing/payment partner sandbox.
- Tokenized virtual card credential for an Agent.
- Per-transaction, daily, monthly, merchant/MCC and country controls.
- Wallet/stablecoin credential profile.
- Automatic rail selection between at least two eligible rails.
- Signed provider callbacks and reconciliation.
- Security and legal readiness review.
- Limited controlled real-money pilot only after provider approval.

## Phase 3 — x402 interoperability

- Parse x402 payment requirements into Universal Payment Intents.
- Select x402-compatible credential/payment scheme under x405 policy.
- Bind x402 settlement evidence into Universal Payment Receipt.
- Publish `x405-x402` conformance tests and examples.

## Phase 4 — Bank and local rails

- Tokenized bank-account/source-account handles.
- ACH, SEPA, Faster Payments, SWIFT and supported local rail adapters.
- Jurisdiction packs and capability manifests.
- FX, return, cancellation, and compliance-hold semantics.

## Phase 5 — Multi-provider universal router

- Multiple issuers, banks, PSPs, wallets, stablecoin providers and local rails.
- Route scoring by authority, acceptance, cost, FX, speed, reliability, finality and reversibility.
- Provider circuit breakers and health state.
- Enterprise/ERP/accounting connectors.

## Phase 6 — Open conformance ecosystem

- Public test vectors.
- Provider certification profile.
- Agent-framework adapters.
- Reference SDKs.
- Independent implementation compatibility testing.
- Standards-community and industry-governance expansion.

## Production gate

A feature is production-ready only after specification, implementation, automated tests, threat review, credential-security review, provider/legal approval where applicable, monitoring, incident response, reconciliation, and rollback/revocation procedures are complete.
