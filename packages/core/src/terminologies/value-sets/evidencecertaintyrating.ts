/**
 * The assessment of quality, confidence, or certainty.
 * http://hl7.org/fhir/ValueSet/certainty-rating
 */
export const EvidenceCertaintyRatingCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceCertaintyRatingCode =
  typeof EvidenceCertaintyRatingCode[keyof typeof EvidenceCertaintyRatingCode];
