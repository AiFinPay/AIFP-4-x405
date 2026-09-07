# 04 — Autonomous Agent Risk Disclosure

Before enabling autonomous payment mode, the Sponsor should receive a separate risk disclosure and provide explicit consent.

## Risks to disclose

Autonomous software may:

- misunderstand instructions or merchant terms;
- select the wrong item, amount, supplier or timing;
- be affected by prompt injection or malicious external content;
- call a compromised plugin, MCP server, API or tool;
- act on stale, incomplete or incorrect data;
- encounter pricing, FX or settlement changes;
- retry a failed action unless idempotency controls work correctly;
- be compromised through stolen credentials, keys or session tokens;
- interact with fraudulent merchants or manipulated beneficiaries.

## Required controls

The Sponsor should be told to use:

- low default limits;
- merchant/MCC/beneficiary controls;
- approval thresholds;
- velocity limits;
- scoped credentials;
- key rotation and revocation;
- alerts and transaction review;
- emergency freeze.

## Consent design

Autonomous-payment consent SHOULD be separate from general Terms, attributable to the Sponsor, timestamped, versioned and linked to the Agent/mandate. It should not be inferred from inactivity.

## Limitation

Risk acceptance does not waive non-waivable statutory protections or excuse a provider's own legal obligations.
