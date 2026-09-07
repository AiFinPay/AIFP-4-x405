# x405 / AIFP-4 Documentation Portal

## Start here

- [Protocol overview](../README.md)
- [x405 standard overview](x405-standard.md)
- [Core specification](aifp4/01-core-specification.md)
- [Architecture](architecture.md)
- [Onboarding and delegated authority](onboarding-and-delegation.md)
- [Message lifecycle](message-lifecycle.md)

## Trust, security and regulation

- **[Global Compliance Framework](../Compliance/README.md)**
- [Security model](security-model.md)
- [Compliance boundaries](compliance-boundaries.md)
- [Global licensed partner network](global-partner-network.md)
- [Protocol economics](economics.md)
- [Security disclosure](../SECURITY.md)

## Machine-readable contracts

- [OpenAPI 3.1 draft](../openapi/aifp-4.openapi.yaml)
- [Agent Financial Profile JSON Schema](../schemas/agent-financial-profile.schema.json)
- [Payment Credential JSON Schema](../schemas/payment-credential.schema.json)
- [Legacy Payment Intent JSON Schema](../schemas/payment-intent.schema.json)
- [Legacy Treasury Receipt JSON Schema](../schemas/treasury-receipt.schema.json)

## Build and govern

- [Roadmap](../ROADMAP.md)
- [Contributing](../CONTRIBUTING.md)
- [Governance](../GOVERNANCE.md)
- [Examples](../examples/README.md)

v0.2 introduces x405 financial-profile and universal-payment semantics additively. Existing v0.1 treasury artifacts remain reference-compatible while migration profiles are developed.

All implementation artifacts are draft unless explicitly marked production-ready. No production secrets, raw KYC files, PAN/CVV, partner credentials, or regulated customer data belong in this repository.
