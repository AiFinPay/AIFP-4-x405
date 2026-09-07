# 03 — Agent Payment Delegation Mandate

## Purpose

The Delegation Mandate is the Sponsor's explicit instruction that a named AI Agent may initiate payment actions within a bounded scope.

## Minimum mandate fields

```yaml
mandate_id: mandate_...
sponsor_id: sponsor_...
agent_passport_id: agent_...
financial_profile_id: afp_...
credential_ids:
  - cred_...
valid_from: 2026-09-07T00:00:00Z
valid_until: null
status: ACTIVE
limits:
  per_transaction: "500.00"
  daily: "2000.00"
  monthly: "15000.00"
allowed_currencies: [USD, EUR]
allowed_rails: [CARD, X402, BANK]
allowed_merchants: []
blocked_merchants: []
allowed_mcc: []
blocked_mcc: []
allowed_countries: []
allowed_purposes: [software, infrastructure]
approval_rules:
  above: "1000.00"
  approvals_required: 1
```

## Sponsor consent

The Sponsor should expressly confirm substantially the following concept:

> I authorize the identified AI Agent to initiate payment instructions using the identified funding source or tokenized payment credential only within this active mandate. I understand that the Agent may act without a new human confirmation for each payment when the transaction remains within these limits and policies.

## Revocation

- Sponsor MUST be able to revoke or freeze the mandate.
- Revocation MUST take precedence over cached authorization.
- Revocation does not automatically reverse a transaction already accepted or settled by a provider.
- Material changes to amount, beneficiary, credential or purpose may require a new signed intent/approval depending on policy.

## Evidence

The system SHOULD retain the mandate version/hash used for each transaction so authorization can be reconstructed later.
