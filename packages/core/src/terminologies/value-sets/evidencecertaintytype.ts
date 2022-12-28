/**
 * The aspect of quality, confidence, or certainty.
 * http://hl7.org/fhir/ValueSet/certainty-type
 */
export const EvidenceCertaintyTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceCertaintyTypeCode =
  typeof EvidenceCertaintyTypeCode[keyof typeof EvidenceCertaintyTypeCode];
