# x405 — Universal Payment Protocol for the Agent Economy

## Positioning

x405 is the public protocol name for the AIFP-4 financial capability standard.

Its purpose is to let an AI Agent receive one persistent financial profile and use multiple payment methods under explicit delegated authority.

```text
One Agent
→ One Financial Profile
→ Multiple tokenized credentials
→ Multiple payment rails
→ One policy and receipt model
```

## Core idea

A Sponsor completes the required relationship onboarding with an eligible provider. The Sponsor then delegates bounded financial authority to a specific Agent identity.

The Agent can receive access to capabilities such as:

- a crypto wallet;
- a stablecoin balance or account;
- a virtual/tokenized card;
- a bank-transfer capability;
- an x402-compatible wallet/payment scheme;
- local payment rails.

The Agent submits a rail-independent payment intent. x405 determines which rails and credentials are eligible and can select the best permitted route.

## What x405 standardizes

### 1. Financial identity

A persistent `AgentFinancialProfile` tied to AIFP-3 Agent Passport and a verified Sponsor.

### 2. Delegated financial authority

Machine-readable controls for amount, merchant, MCC, beneficiary, country, currency, purpose, velocity, time, rail, funding source, and approval.

### 3. Payment credential abstraction

A common representation for tokenized card, bank, x402, wallet, stablecoin, and local-rail capabilities.

### 4. Universal payment intent

One intent format independent of settlement rail.

### 5. Universal routing

A common method to filter and select eligible routes.

### 6. Verifiable execution evidence

A signed receipt model binding identity, authority, route, and final execution state.

## Relationship to x402

x402 standardizes internet-native payment negotiation over HTTP and supports extensible payment schemes.

x405 can use x402 as one rail/profile while adding persistent Agent financial identity, delegated authority, credential management, and multi-rail routing.

They can be composed:

```text
Merchant/API → x402 Payment Requirement
                 ↓
Agent → x405 Financial Profile
                 ↓
x405 authorization and rail selection
                 ↓
x402-compatible execution
                 ↓
x405 Universal Payment Receipt
```

## Design principles

- Agent-first, sponsor-authorized.
- Rail-neutral.
- Provider-neutral.
- Tokenized credentials instead of exposed secrets.
- Global protocol, local regulated execution.
- Deny by default.
- Revocation first.
- Verifiable receipts.
- Backward-compatible evolution where practical.

## Standardization status

x405 is currently a **proposed open standard** maintained in the AiFinPay protocol repository. The goal is broad interoperability across AI platforms, payment providers, issuers, banks, wallets, merchants, and agent frameworks.

Formal standards-body recognition or market-wide adoption must only be claimed if and when it occurs.

## Naming

The name `x405` is a protocol brand. It is not an HTTP status-code extension and does not redefine HTTP 405.
