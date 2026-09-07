# 07 — Unauthorized Transactions and Disputes

## 1. Evidence model

An x405 transaction may be treated as initiated under Sponsor authority when evidence shows that:

- the Agent was registered and active;
- the Sponsor mandate was active;
- the credential was valid;
- the transaction matched the mandate and policy;
- required approvals were present;
- signatures/nonces/expiry/idempotency checks passed;
- the provider accepted or settled the transaction.

This creates evidence of delegated authorization; it does not automatically override mandatory unauthorized-payment law.

## 2. Dispute allocation

The definitive provider agreement must specify who handles:

- authorization disputes;
- card chargebacks;
- payment returns/recalls;
- merchant disputes;
- fraud claims;
- complaints and ADR/ombudsman processes;
- evidence production and response deadlines.

## 3. Mandatory rights

Consumer and payment-user protections vary materially by jurisdiction. Terms MUST NOT state that every Agent-initiated payment is irrevocably the Sponsor's responsibility where mandatory law provides otherwise.

## 4. Incident cases

A dispute process should distinguish:

- valid Agent action within mandate;
- Sponsor misconfiguration;
- compromised Sponsor/Agent credentials;
- provider or processor error;
- merchant fraud/non-performance;
- protocol defect;
- unauthorized mandate change;
- transaction executed after effective revocation.

## 5. Evidence preservation

Relevant signed intent, mandate version, policy decision, credential reference, provider response, timestamps, IP/device/session metadata where lawful, and receipt should be preserved under the applicable retention policy.
