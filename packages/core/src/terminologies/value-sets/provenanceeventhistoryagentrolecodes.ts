/**
 * Types of roles indicating how a particular agent was involved with the creation or modification of a resource for use when exposing event history
 * http://hl7.org/fhir/ValueSet/provenance-history-agent-type
 */
export const ProvenanceEventHistoryAgentRoleCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceEventHistoryAgentRoleCodesCode =
  typeof ProvenanceEventHistoryAgentRoleCodesCode[keyof typeof ProvenanceEventHistoryAgentRoleCodesCode];
