# 11 — Licensed Provider Agreement Template

This template intentionally uses placeholders so any eligible financial company can integrate with x405.

## Parties

- `[PROTOCOL OPERATOR LEGAL ENTITY]`
- `[LICENSED FINANCIAL PROVIDER LEGAL ENTITY]`
- `[JURISDICTION]`
- `[REGULATORY AUTHORITY]`
- `[LICENSE / REGISTRATION REFERENCE]`

## Scope schedule

Provider should declare:

- supported countries/corridors;
- customer types (B2B, consumer, platform, developer);
- supported rails;
- card networks / bank rails / digital-asset rails;
- currencies/assets;
- minimum/maximum amounts;
- onboarding requirements;
- KYC/KYB/UBO responsibilities;
- AML/sanctions/transaction-monitoring responsibilities;
- safeguarding/custody responsibility;
- fraud, dispute and chargeback responsibility;
- data residency and subprocessors;
- SLA and operational hours;
- incident notification process;
- audit rights where required;
- termination and exit process.

## Responsibility matrix

| Function | x405 / Protocol Operator | Licensed Provider |
|---|---|---|
| Agent Passport integration | Primary | Consume/reference |
| Delegated authority / policy | Primary | Enforce agreed controls where integrated |
| Universal Payment Intent | Primary | Receive selected instruction |
| KYC/KYB/UBO | Support/reference only unless separately authorized | As required by law/contract |
| AML/sanctions monitoring | Signals/integration | As required by law/contract |
| Card/account issuance | No, unless separately licensed | Provider/issuer |
| PAN/token vault | Avoid raw PAN | Provider/processor/network |
| Regulated payment execution | No, unless separately licensed | Provider |
| Chargebacks/returns | Evidence/support | Provider according to rail rules |
| Signed x405 receipt | Primary | Provide execution evidence |

## Key principle

The agreement must allocate obligations clearly but cannot contract around mandatory regulatory responsibility.
