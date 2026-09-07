# 05 — KYC/KYB, AML and Sanctions Framework

## 1. Provider-neutral model

x405 does not require one global KYC vendor. Each production provider publishes the onboarding and compliance capabilities applicable to its jurisdictions and customer types.

## 2. Who is verified

Depending on law and provider policy, verification may cover:

- natural-person Sponsor;
- legal entity / company;
- beneficial owners and controllers;
- authorized signatory;
- source/funding relationship;
- purpose and expected activity;
- Agent Platform or delegated operator.

The Agent itself is a software identity and SHOULD be bound to the verified Sponsor through AIFP-3 and an x405 financial profile.

## 3. Data minimization

Raw identity documents SHOULD remain with the regulated provider whenever feasible. x405 SHOULD consume references/attestations such as:

```json
{
  "provider_id": "provider_...",
  "subject_ref": "subject_...",
  "status": "VERIFIED",
  "scope": ["KYB", "UBO"],
  "issued_at": "...",
  "expires_at": "...",
  "assurance_level": "provider-defined"
}
```

## 4. Ongoing controls

A production arrangement may require ongoing:

- sanctions screening;
- PEP screening;
- transaction monitoring;
- suspicious-activity escalation/reporting;
- risk scoring;
- periodic CDD refresh;
- event-driven re-KYC/KYB;
- enhanced due diligence for higher risk;
- jurisdiction/corridor restrictions.

## 5. FATF baseline

Jurisdiction Packs should map to the current FATF Recommendations and local implementation, including CDD, beneficial ownership, recordkeeping, higher-risk jurisdictions, new-technology risk and payment transparency where applicable.

No public statement should imply that x405 itself performs or satisfies all AML obligations globally.
