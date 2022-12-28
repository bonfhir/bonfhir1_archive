/**
 * The role that a provenance participant played
 * http://hl7.org/fhir/ValueSet/provenance-participant-role
 */
export const ProvenanceParticipantRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceParticipantRoleCode =
  typeof ProvenanceParticipantRoleCode[keyof typeof ProvenanceParticipantRoleCode];
