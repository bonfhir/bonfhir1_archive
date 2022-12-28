/**
 * The type of participation a provenance participant.
 * http://hl7.org/fhir/ValueSet/provenance-agent-type
 */
export const ProvenanceParticipantTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceParticipantTypeCode =
  typeof ProvenanceParticipantTypeCode[keyof typeof ProvenanceParticipantTypeCode];
