# 12 — Jurisdiction Pack Template

Create one pack per country/corridor before production.

## Metadata

```yaml
jurisdiction: "[COUNTRY / REGION]"
version: "1.0"
status: "LEGAL_REVIEW_REQUIRED"
review_date: "YYYY-MM-DD"
legal_counsel: "[NAME / FIRM]"
provider: "[LICENSED FINANCIAL PROVIDER]"
regulator: "[AUTHORITY]"
```

## Required legal analysis

1. Is x405 activity regulated in this jurisdiction based on actual functions performed?
2. Which entity is the payment service provider / issuer / bank / money transmitter / VASP?
3. What licenses/registrations are required?
4. Who must perform KYC/KYB/UBO?
5. Which AML/CFT, sanctions, PEP and transaction-monitoring rules apply?
6. What consumer/payment-user rights apply?
7. What unauthorized-payment liability rules apply?
8. Are Agent-initiated payments legally treated as instructions of the Sponsor under the proposed mandate?
9. What card-network/issuer rules apply?
10. What privacy, data localization and cross-border transfer rules apply?
11. What retention/reporting obligations apply?
12. Are there restrictions on stablecoins, crypto or cross-border transfers?
13. What complaint/ADR/ombudsman process is required?
14. What tax/accounting disclosures apply?

## Configuration output

The approved pack should produce machine-readable constraints for:

- customer type;
- currencies/assets;
- rails;
- countries/corridors;
- transaction limits;
- prohibited purposes;
- required data fields;
- approval thresholds;
- retention;
- provider eligibility;
- compliance controls.

## EU/EEA note

Counsel should assess the payment-services regime in force at launch, including PSD2 and any successor PSD3/PSR rules when effective, plus DORA, GDPR and local transposition/supervisory requirements as applicable.

Production status requires written legal/provider approval, not merely completion of this template.
