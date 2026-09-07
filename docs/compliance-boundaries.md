# x405 / AIFP-4 Compliance and Regulatory Boundaries

> This document is a technical responsibility model, not legal advice. Production deployment requires qualified payments/regulatory counsel and the relevant licensed providers.

## Protocol position

x405/AIFP-4 is software infrastructure and a financial capability, authorization, routing, and messaging protocol. By specification alone it is not a bank, card issuer, custodian, payment institution, money transmitter, exchange, e-money issuer, acquirer, or licensed virtual-asset provider.

## The Sponsor model

An AI Agent does not become a legal person merely because it has an x405 Financial Profile.

The protocol models a **Sponsor** — a human, company, developer, or Agent Platform with authority to delegate financial capability to the Agent.

The Agent's ability to pay is derived from that delegated authority and from credentials provided under the applicable provider relationship.

## KYC/KYB onboarding

Where required, KYC/KYB SHOULD be performed by the regulated provider responsible for the relevant account, card, wallet, payment service, or regulated relationship.

x405 SHOULD consume tokenized references or attestations rather than duplicating raw KYC data.

A provider MAY treat initial identity onboarding as reusable for subsequent Agent provisioning under the same customer relationship, subject to its legal, risk, scheme, and policy requirements.

## AML and sanctions are not “one-time”

A successful initial KYC/KYB event MUST NOT be represented as the end of compliance obligations.

Depending on the provider and jurisdiction, ongoing obligations can include:

- sanctions screening;
- PEP screening;
- transaction monitoring;
- fraud monitoring;
- suspicious activity reporting;
- source-of-funds/source-of-wealth review;
- re-KYC/KYB;
- periodic customer review;
- card-network or banking monitoring.

The protocol can carry status and attestation references, but the regulated provider remains responsible for obligations assigned to it by law, license, scheme rules, and contract.

## Card issuing profile

For card-enabled Agents:

- issuance MUST occur through an eligible issuer/program structure;
- cardholder/customer identification must follow issuer and scheme requirements;
- raw PAN/CVV SHOULD remain outside the Agent context;
- x405 SHOULD use issuer/network tokens or provider-side payment handles;
- PCI DSS scope and responsibilities must be explicitly allocated;
- chargebacks, disputes, refunds, fraud, and card-network rules remain part of the provider/issuer operating model.

## Bank-transfer profile

For account and bank-transfer capabilities, the relevant regulated provider owns or coordinates the required account-opening, safeguarding, transmission, FX, sanctions, reporting, and local-rail obligations according to its role.

## Digital-asset profile

Stablecoin or crypto execution may create VASP/CASP, custody, exchange, Travel Rule, sanctions, tax, or money-transmission obligations depending on structure and jurisdiction.

The presence of a non-custodial wallet does not automatically remove all regulatory obligations.

## Responsibility model

### AiFinPay / x405 protocol operator may provide

- protocol standards and schemas;
- Agent Financial Profiles;
- AIFP-3 identity binding;
- delegated-authority and policy infrastructure;
- tokenized credential registry;
- route discovery and provider connectivity;
- signed receipts, monitoring, and reconciliation tooling.

### Regulated provider / execution partner may provide

- customer onboarding and regulated account opening;
- KYC/KYB and beneficial-owner verification;
- card issuance and program management;
- AML, sanctions, PEP, fraud, and transaction monitoring;
- safeguarding or custody;
- payment execution;
- FX or asset conversion;
- Travel Rule duties;
- regulatory reporting;
- suspicious activity reporting;
- disputes, returns, complaints, and chargebacks.

### Sponsor/customer organization remains responsible for

- lawful purpose;
- authority to provision the Agent;
- internal delegation and approvals;
- tax/accounting obligations;
- accuracy of merchant/beneficiary data;
- use of the Agent inside approved policies and jurisdictions;
- revoking access when the Agent or credential is compromised or no longer authorized.

## Data roles

Every production deployment must document:

- controller/processor roles;
- regulated-data owner;
- retention and deletion;
- legal holds;
- cross-border transfer mechanism;
- encryption and access controls;
- subprocessors;
- breach notification;
- PCI DSS boundaries for card data where relevant.

## Activation states

A provider, country, corridor, credential type, or rail can be marked:

- `specified`;
- `sandbox`;
- `partner_pending`;
- `limited`;
- `production`.

`production` requires the applicable contractual, legal, technical, security, scheme, and operational approvals.

## Public-claim rule

Documentation may describe x405 as a **proposed open standard** or **universal payment protocol design**. It must not claim formal international-standard status, worldwide licensing, or universal market adoption unless that becomes factually true and verifiable.
