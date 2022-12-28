/**
 * This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 * http://hl7.org/fhir/ValueSet/encounter-participant-type
 */
export const ParticipantTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipantTypeCode =
  typeof ParticipantTypeCode[keyof typeof ParticipantTypeCode];
