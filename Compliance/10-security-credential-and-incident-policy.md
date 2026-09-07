# 10 — Security, Credential and Incident Policy

## Security baseline

- deny by default;
- least privilege;
- scoped and revocable credentials;
- signed immutable payment intents;
- nonce, expiry and replay protection;
- idempotency for payment initiation;
- key rotation and revocation;
- separation of policy administration, initiation, approval and execution;
- merchant/beneficiary and velocity controls;
- audit logs and tamper-evident receipts;
- provider callback signature verification;
- emergency freeze.

## Card data

x405 SHOULD prefer network/provider tokens and SHOULD avoid storing or exposing raw PAN/CVV. Any environment that stores, processes or transmits cardholder data must assess applicable PCI DSS scope and requirements.

## Incident classes

At minimum:

- Agent key compromise;
- Sponsor account compromise;
- credential/token compromise;
- unauthorized mandate change;
- provider/API compromise;
- prompt-injection-driven payment attempt;
- replay or idempotency failure;
- data breach;
- fraud spike or sanctions alert;
- integrity failure in receipts or logs.

## Response

The system should support rapid profile/credential freeze, evidence preservation, provider notification, key rotation, containment, recovery, root-cause analysis and legally required notifications.

Provider agreements must define incident contacts, severity, notification windows, audit cooperation and post-incident reporting. EU financial-sector deployments should assess DORA contractual and incident requirements where applicable.
