# 01 — Global Compliance Baseline

## 1. Purpose

This baseline defines minimum legal and compliance controls for an x405 production deployment. It is provider-neutral and jurisdiction-neutral until completed by a local Jurisdiction Pack.

## 2. Mandatory production gates

A deployment MUST NOT be marked `production` for a jurisdiction or rail until all applicable items are completed:

- legal classification of AiFinPay/x405 activities;
- legal classification and license verification of each regulated provider;
- definitive responsibility matrix;
- KYC/KYB/UBO onboarding flow where required;
- AML/CFT, sanctions, PEP and transaction-monitoring allocation;
- card/network or payment-rail approval where applicable;
- privacy/data roles and cross-border transfer analysis;
- security review, incident process and credential controls;
- complaints/dispute/chargeback process;
- recordkeeping and audit-evidence policy;
- local consumer-rights analysis if consumers are in scope;
- signed provider agreement and required data-processing terms.

## 3. Role separation

x405 SHOULD keep protocol orchestration separate from regulated financial execution.

**Protocol Operator may provide:** Agent Passport integration, financial profile, delegated authority, policy engine, routing, credential references, signed intents, receipts, logging and reconciliation.

**Licensed Financial Provider may provide:** regulated onboarding, account/card issuance, safeguarding, money transmission, settlement, FX, sanctions/AML monitoring, reporting, disputes and complaints where required.

Actual responsibility is determined by law and definitive agreements, not labels alone.

## 4. Sponsor principle

A payment credential is issued or made available under the authority of a verified Sponsor or organization. The Sponsor expressly delegates a bounded mandate to an Agent. The Sponsor MUST be able to suspend or revoke that mandate.

## 5. No absolute waiver

Contract terms MAY allocate risk and limit liability to the maximum extent permitted by law. They MUST NOT purport to waive non-waivable statutory rights, mandatory issuer/network obligations, fraud liability, or other responsibility that applicable law does not permit a party to exclude.

## 6. Continuous compliance

Identity onboarding may be event-based, but AML/sanctions obligations do not become permanently complete after onboarding. Providers may require ongoing monitoring, periodic refresh, event-driven re-verification, enhanced due diligence or account suspension.

## 7. Global references

Use the latest applicable versions at launch. FATF Recommendations were amended in June 2026. PCI SSC currently publishes PCI DSS v4.0.1. EU deployments should assess DORA where x405 is an ICT third-party service to a financial entity.
