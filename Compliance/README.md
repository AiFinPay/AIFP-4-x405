# x405 Global Compliance Framework

**Status:** Draft baseline for legal, compliance and provider review.  
**Scope:** Vendor-neutral. No specific issuer, bank, PSP, processor or VASP is embedded in the x405 standard.

This folder defines the legal/compliance baseline around x405. It is intentionally written so any eligible regulated financial provider in any jurisdiction can integrate under its own definitive agreement and jurisdiction pack.

> These documents are templates and protocol governance material, not legal advice and not a substitute for jurisdiction-specific counsel. No document overrides mandatory law, regulatory requirements, card-network rules, issuer rules, consumer rights, sanctions obligations or the definitive agreement with a licensed provider.

## Core legal model

```text
Verified Sponsor / Company / Developer
  → regulated onboarding where required
  → AIFP-3 Agent Passport
  → x405 Agent Financial Profile
  → Sponsor grants Delegated Authority
  → tokenized Payment Credential
  → Agent initiates payment within the mandate
  → Licensed Financial Provider performs regulated execution
  → signed x405 evidence / receipt
```

The **Sponsor** retains control of the funding source and voluntarily delegates limited payment authority to a registered AI Agent. The Agent does not become a legal person merely by receiving an x405 profile.

AiFinPay/x405 provides protocol, identity binding, policy, orchestration, routing and evidence functions. A licensed provider performs card issuance, account issuance, safeguarding, money transmission, regulated settlement, KYC/KYB, AML/sanctions monitoring, chargebacks or other regulated functions to the extent required by applicable law and the definitive allocation of responsibilities.

## Documents

1. [Global Compliance Baseline](01-global-compliance-baseline.md)
2. [Sponsor and Agent Terms Framework](02-sponsor-and-agent-terms-framework.md)
3. [Agent Payment Delegation Mandate](03-agent-payment-delegation-mandate.md)
4. [Autonomous Agent Risk Disclosure](04-autonomous-agent-risk-disclosure.md)
5. [KYC/KYB, AML and Sanctions Framework](05-kyc-kyb-aml-sanctions-framework.md)
6. [Acceptable Use Policy](06-acceptable-use-policy.md)
7. [Unauthorized Transactions and Disputes](07-unauthorized-transactions-and-disputes.md)
8. [Liability and Indemnity Framework](08-liability-and-indemnity-framework.md)
9. [Privacy, Data and Recordkeeping](09-privacy-data-and-recordkeeping.md)
10. [Security, Credential and Incident Policy](10-security-credential-and-incident-policy.md)
11. [Licensed Provider Agreement Template](11-licensed-provider-agreement-template.md)
12. [Jurisdiction Pack Template](12-jurisdiction-pack-template.md)

## Global reference baseline

The framework should be mapped by counsel and each regulated provider against, where applicable:

- FATF Recommendations, including CDD, ongoing due diligence, recordkeeping, sanctions and payment-transparency requirements;
- PCI DSS v4.0.1 for environments that store, process or transmit cardholder data;
- applicable privacy/data-protection law, including GDPR where applicable;
- applicable payment-services, e-money, banking, money-transmission, card-issuing and virtual-asset law;
- DORA and related ICT third-party obligations where an EU financial entity uses x405 services for covered ICT functions;
- card-network, issuer, processor and scheme rules;
- local sanctions, AML/CFT, fraud, consumer protection, tax and recordkeeping requirements.

The recommended first production profile is **B2B / organization-sponsored agents**. Consumer use requires a separate consumer-rights and unauthorized-payment analysis per jurisdiction.
