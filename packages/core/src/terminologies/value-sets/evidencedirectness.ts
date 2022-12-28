/**
 * The quality of how direct the match is.
 * http://hl7.org/fhir/ValueSet/directness
 */
export const EvidenceDirectnessCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceDirectnessCode =
  typeof EvidenceDirectnessCode[keyof typeof EvidenceDirectnessCode];
