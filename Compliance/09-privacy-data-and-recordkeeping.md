# 09 — Privacy, Data and Recordkeeping

## Data minimization principle

x405 SHOULD retain only data necessary for authorization, routing, security, audit and reconciliation. Raw KYC files, PAN/CVV, banking passwords and provider master secrets should remain outside the protocol layer whenever feasible.

## Data inventory

Each production deployment must document:

- data categories and purposes;
- controller/processor or equivalent roles;
- legal basis where applicable;
- data location and subprocessors;
- cross-border transfer mechanism;
- retention periods;
- deletion/legal-hold rules;
- security classification;
- data-subject/customer request handling;
- breach notification workflow.

## Recommended separation

```text
Regulated Provider Vault:
  identity documents / KYC / KYB / PAN / bank secrets

x405 Protocol Layer:
  opaque subject reference / status attestation / mandate / policy / credential token / signed payment evidence
```

## Recordkeeping

Retention MUST follow applicable law and provider obligations. FATF standards generally require regulated financial institutions to maintain specified transaction and CDD records for at least five years, but local rules may require different or longer periods.

The protocol should preserve enough evidence to reconstruct:

- who sponsored the Agent;
- what mandate was active;
- what the Agent intended;
- what policy decision was made;
- which credential/route was used;
- which provider executed;
- final transaction status.
