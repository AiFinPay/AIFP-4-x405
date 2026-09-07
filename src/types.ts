export type Decision = "AUTHORIZED" | "DENIED" | "APPROVAL_REQUIRED";

export type IntentState =
  | "DRAFT" | "SUBMITTED" | "DENIED" | "APPROVAL_REQUIRED" | "AUTHORIZED"
  | "REJECTED" | "EXPIRED" | "QUOTING" | "ROUTE_SELECTED" | "NO_ROUTE"
  | "INSTRUCTION_SENT" | "PARTNER_REVIEW" | "COMPLIANCE_HOLD" | "ACCEPTED"
  | "PROCESSING" | "SETTLED" | "RECONCILED" | "FAILED" | "RETURNED" | "CANCELLED";

export interface Money {
  amount: string;
  currency: string;
}

// v0.1 treasury-oriented reference type retained for compatibility.
export interface PaymentIntent {
  protocolVersion: "0.1";
  intentId: string;
  organizationId: string;
  sourceEntityId: string;
  departmentId?: string;
  initiatingIdentityId: string;
  beneficiaryId: string;
  sourceCountry: string;
  destinationCountry: string;
  money: Money;
  purposeCode: string;
  createdAt: string;
  expiresAt: string;
  idempotencyKey: string;
  nonce: string;
  intentHash: string;
  state: IntentState;
}

export type X405ProfileState = "PROVISIONING" | "ACTIVE" | "SUSPENDED" | "REVOKED";
export type X405CredentialState = "PROVISIONING" | "ACTIVE" | "SUSPENDED" | "REVOKED" | "EXPIRED";
export type X405Rail = "X402" | "CARD" | "BANK" | "STABLECOIN" | "CRYPTO" | "LOCAL";
export type X405CredentialType =
  | "CARD_TOKEN"
  | "BANK_ACCOUNT_TOKEN"
  | "CRYPTO_WALLET"
  | "STABLECOIN_ACCOUNT"
  | "X402_WALLET"
  | "LOCAL_RAIL_TOKEN";

export interface ComplianceAttestation {
  attestationId: string;
  providerId: string;
  subjectRef: string;
  subjectType: "PERSON" | "ORGANIZATION" | "OTHER";
  status: "VERIFIED" | "REVIEW" | "SUSPENDED" | "EXPIRED" | "REJECTED";
  jurisdiction?: string;
  scope: string[];
  issuedAt: string;
  expiresAt?: string;
}

export interface DelegatedAuthority {
  authorityId: string;
  version: string;
  sponsorId: string;
  agentId: string;
  profileId: string;
  allowedRails: X405Rail[];
  allowedCurrencies?: string[];
  allowedCountries?: string[];
  allowedPurposeCodes?: string[];
  allowedMerchants?: string[];
  blockedMerchants?: string[];
  allowedMcc?: string[];
  blockedMcc?: string[];
  perTransactionLimit?: string;
  dailyLimit?: string;
  monthlyLimit?: string;
  approvalThresholds?: Array<{ above: string; approvals: number }>;
  validFrom: string;
  expiresAt?: string;
  revokedAt?: string;
}

export interface PaymentCredential {
  credentialId: string;
  profileId: string;
  providerId: string;
  type: X405CredentialType;
  state: X405CredentialState;
  allowedRails: X405Rail[];
  currencyOrAssets?: string[];
  tokenReference: string;
  createdAt: string;
  expiresAt?: string;
}

export interface AgentFinancialProfile {
  protocolVersion: "0.2";
  profileId: string;
  agentId: string;
  agentPassportId: string;
  sponsorId: string;
  organizationId?: string;
  state: X405ProfileState;
  authorityId: string;
  complianceAttestationIds: string[];
  credentialIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UniversalPaymentIntent {
  protocolVersion: "0.2";
  intentId: string;
  financialProfileId: string;
  initiatingAgentId: string;
  merchantOrBeneficiary: string;
  money: Money;
  purposeCode: string;
  paymentMode: "AUTO" | X405Rail;
  preferredRails?: X405Rail[];
  merchantEndpoint?: string;
  x402Resource?: string;
  createdAt: string;
  expiresAt: string;
  idempotencyKey: string;
  nonce: string;
  intentHash: string;
  state: IntentState;
}

export interface UniversalPaymentReceiptPayload {
  protocolVersion: "0.2";
  receiptId: string;
  intentId: string;
  intentHash: string;
  financialProfileId: string;
  agentId: string;
  authorityId: string;
  credentialId: string;
  rail: X405Rail;
  partnerId: string;
  partnerReference: string;
  money: Money;
  finalStatus: "SETTLED" | "RECONCILED" | "FAILED" | "RETURNED" | "CANCELLED";
  issuedAt: string;
  keyId: string;
}

export interface TreasuryPolicy {
  policyId: string;
  version: string;
  organizationId: string;
  allowedCountries: string[];
  allowedCurrencies: string[];
  allowedPurposeCodes: string[];
  allowedBeneficiaries?: string[];
  perTransactionLimit: string;
  approvalThresholds: Array<{ above: string; approvals: number }>;
  requireKnownBeneficiary: boolean;
}

export interface AuthorizationDecision {
  decision: Decision;
  reasons: string[];
  requiredApprovals: number;
  policyId: string;
  policyVersion: string;
}

export interface ApprovalRecord {
  approvalId: string;
  intentId: string;
  intentHash: string;
  approverIdentityId: string;
  decision: "APPROVE" | "REJECT";
  recordedAt: string;
  expiresAt: string;
}

export interface RouteQuote {
  routeQuoteId: string;
  partnerId: string;
  rail: string;
  source: Money;
  destination: Money;
  fees: Array<{ category: string; money: Money }>;
  estimatedSettlementSeconds: number;
  reversible: boolean;
  expiresAt: string;
}

export interface TreasuryReceiptPayload {
  protocolVersion: "0.1";
  receiptId: string;
  intentId: string;
  intentHash: string;
  organizationId: string;
  policyId: string;
  policyVersion: string;
  approvalIds: string[];
  routeQuoteId: string;
  partnerId: string;
  partnerReference: string;
  money: Money;
  finalStatus: "SETTLED" | "RECONCILED" | "FAILED" | "RETURNED" | "CANCELLED";
  issuedAt: string;
  keyId: string;
}

export interface SignedTreasuryReceipt {
  payload: TreasuryReceiptPayload;
  signature: string;
}
