/**
 * The type of network access point of this agent in the audit event.
 * http://hl7.org/fhir/ValueSet/network-type
 */
export const AuditEventAgentNetworkTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventAgentNetworkTypeCode =
  typeof AuditEventAgentNetworkTypeCode[keyof typeof AuditEventAgentNetworkTypeCode];
