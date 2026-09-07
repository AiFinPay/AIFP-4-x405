# AIFP-4 / x405 Core Protocol Specification

**Version:** 0.2-draft  
**Status:** Proposed Draft Standard

The key words MUST, MUST NOT, REQUIRED, SHALL, SHALL NOT, SHOULD, SHOULD NOT, RECOMMENDED, MAY, and OPTIONAL are normative requirements.

## 1. Scope

AIFP-4 specifies x405, a rail-independent financial capability protocol for AI agents. The protocol defines how a verified Sponsor delegates financial authority to an Agent, how that authority is represented in an Agent Financial Profile, how payment credentials are referenced without exposing unnecessary secrets, how a universal payment intent is authorized and routed, and how execution is evidenced through a verifiable receipt.

x405 MAY route through x402, card networks, bank-transfer rails, stablecoins, crypto wallets, local payment systems, or other conformant execution adapters.

## 2. Non-goals

The protocol does not, by itself:

- make an AI agent a legal person;
- make AiFinPay or an implementer a bank, issuer, custodian, PSP, money transmitter, or VASP;
- replace KYC/KYB, AML, sanctions, PCI DSS, card-network, banking, safeguarding, or local regulatory requirements;
- require raw KYC data, PAN/CVV, banking passwords, or unrestricted provider credentials to be disclosed to an Agent.

## 3. Actors

- **Sponsor:** human or organization with authority to create, fund, or delegate financial capability to an Agent.
- **Agent:** autonomous software identity bound through AIFP-3 or an equivalent identity profile.
- **Agent Platform:** company or system operating one or more Agents for itself or customers.
- **Protocol Operator:** service implementing x405/AIFP-4 orchestration.
- **Credential Provider:** provider issuing or exposing a tokenized payment capability.
- **Execution Partner:** bank, issuer, payment institution, PSP, wallet, stablecoin provider, VASP, or local rail participant executing settlement under applicable rules.
- **Merchant/Beneficiary:** recipient of the payment.
- **Rail:** x402, card, bank, stablecoin, crypto, or local payment mechanism.

## 4. Identifiers

Implementations MUST use globally unique opaque identifiers and MUST NOT encode regulated personal data.

Recommended prefixes:

- `spn_` Sponsor;
- `agt_` Agent;
- `afp_` Agent Financial Profile;
- `att_` compliance attestation;
- `auth_` delegated authority;
- `cred_` payment credential;
- `pi_` payment intent;
- `rte_` route quote;
- `ins_` settlement instruction;
- `rcp_` universal payment receipt;
- `ptn_` execution partner.

## 5. Agent Financial Profile

A conformant `AgentFinancialProfile` MUST contain:

- protocol version;
- profile ID;
- Agent identity reference;
- Sponsor reference;
- lifecycle state;
- delegated-authority reference or embedded authority;
- compliance-attestation references where required;
- payment-credential references;
- creation and update timestamps.

It MAY include organization, legal-entity, department, project, cost-center, funding-source, jurisdiction, accounting, or ERP references.

Profile states MUST include at least `PROVISIONING`, `ACTIVE`, `SUSPENDED`, and `REVOKED`.

A revoked profile MUST NOT authorize new payments.

## 6. Compliance Attestation

A `ComplianceAttestation` is a provider-issued or provider-verifiable reference to onboarding or compliance state.

It SHOULD contain only the minimum data required for authorization, such as:

- provider identifier;
- subject reference;
- subject type (`PERSON`, `ORGANIZATION`, or supported equivalent);
- status;
- jurisdiction;
- issuance and expiry timestamps;
- assurance or scope indicators;
- signature or authenticated lookup reference.

Raw identity documents SHOULD remain with the regulated provider.

An onboarding attestation MUST NOT be interpreted as proof that ongoing AML, sanctions, fraud, or transaction-monitoring duties have ended.

## 7. Delegated Authority

A `DelegatedAuthority` MUST define the Agent's permitted financial scope.

Controls MAY include:

- per-transaction, daily, monthly, or rolling limits;
- allowed or blocked merchants and beneficiaries;
- MCC or merchant-category controls;
- country and jurisdiction controls;
- allowed currencies and assets;
- allowed payment rails;
- allowed purposes;
- time windows and expiry;
- velocity rules;
- approval thresholds;
- funding-source restrictions;
- recurring-payment permissions;
- emergency freeze and revocation.

Authority MUST be attributable to the Sponsor or another identity with valid delegated power.

## 8. Payment Credentials

A `PaymentCredential` is a tokenized handle to a payment capability.

Credential types MAY include:

- `CARD_TOKEN`;
- `BANK_ACCOUNT_TOKEN`;
- `CRYPTO_WALLET`;
- `STABLECOIN_ACCOUNT`;
- `X402_WALLET`;
- `LOCAL_RAIL_TOKEN`.

Credentials MUST have an owner/provider reference, status, allowed rails, and revocation semantics.

Card profiles SHOULD use issuer or network tokens or provider-side handles. Raw PAN/CVV MUST NOT be required by the x405 core protocol.

## 9. Universal Payment Intent

A `UniversalPaymentIntent` MUST include:

- protocol version;
- intent ID;
- financial-profile ID;
- initiating Agent identity;
- amount and currency or asset;
- merchant/beneficiary reference or destination descriptor;
- purpose;
- payment mode (`AUTO` or an explicit rail profile);
- creation and expiry timestamps;
- idempotency key;
- nonce;
- canonical intent hash;
- authenticated request or signature evidence.

Optional fields MAY include preferred rails, invoice, purchase order, contract, merchant endpoint, x402 resource, MCC expectation, delivery constraints, metadata, or accounting references.

## 10. Authorization

Before execution, a conformant implementation MUST verify:

1. financial-profile state;
2. Agent identity binding;
3. Sponsor/delegation validity;
4. authority expiry and revocation;
5. amount and velocity limits;
6. merchant/beneficiary eligibility;
7. country, currency, asset, rail, and purpose eligibility;
8. credential status;
9. compliance conditions required by the selected provider or jurisdiction;
10. duplicate and replay controls;
11. freeze controls;
12. required approvals.

The result MUST be `AUTHORIZED`, `DENIED`, or `APPROVAL_REQUIRED` with machine-readable reason codes.

## 11. Routing

When `payment_mode=AUTO`, the router MUST consider only routes permitted by authority, credential capability, merchant acceptance, provider eligibility, and jurisdiction rules.

A route quote SHOULD disclose:

- rail profile;
- provider/partner;
- credential reference;
- source and destination currency/asset;
- fees and FX where known;
- expected timing;
- finality/reversibility characteristics;
- quote expiry;
- compliance conditions;
- reliability/availability metadata where exposed.

The router MAY select x402, card, bank, stablecoin, crypto, or local rails.

## 12. Execution

A settlement instruction MUST be created only after authorization and required approvals.

The Execution Partner remains responsible for any regulated execution obligations assigned to it by law, license, scheme rules, and contract.

Partner callbacks MUST be authenticated, idempotent, and replay-protected.

## 13. Universal Payment Receipt

A final `UniversalPaymentReceipt` SHOULD bind:

- original intent and intent hash;
- Agent and financial-profile references;
- authority version;
- approval evidence;
- selected rail and credential reference;
- execution partner reference;
- fees and FX where applicable;
- final state;
- timestamps;
- receipt key identifier and signature.

Sensitive credential secrets MUST NOT appear in receipts.

## 14. State model

At minimum, implementations SHOULD support:

```text
DRAFT → SUBMITTED → AUTHORIZED | DENIED | APPROVAL_REQUIRED
AUTHORIZED → ROUTING → ROUTE_SELECTED | NO_ROUTE
ROUTE_SELECTED → INSTRUCTION_SENT → PROCESSING
PROCESSING → SETTLED | FAILED | RETURNED
SETTLED → RECONCILED
```

Profiles and credentials have independent lifecycle and freeze state.

## 15. x402 interoperability

x405 does not replace x402. A conformant `x405-x402` profile MAY use x402 payment requirements and settlement schemes as an execution route.

The x405 layer is responsible for determining whether the Agent is authorized and financially capable of satisfying the x402 request under its delegated policy.

## 16. Security

Conformant implementations MUST provide:

- least privilege;
- deny-by-default authorization;
- credential scoping and revocation;
- nonce and expiry validation;
- idempotency;
- replay protection;
- tamper-evident audit evidence;
- independent freeze controls;
- secure key-management profiles;
- tokenization/minimization of sensitive financial data.

## 17. Versioning

Breaking changes require a new major protocol version. v0.2 is additive to the existing v0.1 treasury-oriented reference implementation.

## 18. Conformance classes

Implementations MAY claim one or more profiles:

- `x405-Core`;
- `x405-Agent`;
- `x405-Provider`;
- `x405-Card`;
- `x405-Bank`;
- `x405-x402`;
- `x405-DigitalAsset`.

A claimed profile MUST pass its published schema, state-transition, authorization, replay, revocation, credential, routing, failure, and receipt-verification test vectors.

## 19. Naming

`x405` is the protocol name and does not redefine HTTP status code 405.
