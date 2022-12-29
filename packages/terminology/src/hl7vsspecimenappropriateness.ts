/**
 * Value Set of codes that specify the suitability of the specimen for the particular planned use as determined by the filler.
 * http://terminology.hl7.org/ValueSet/v2-0492
 */
export const Hl7VSSpecimenAppropriatenessCode = {
  /**
   * Preferred
   */
  Preferred: "P",

  /**
   * Appropriate
   */
  Appropriate: "A",

  /**
   * Inappropriate
   */
  Inappropriate: "I",

  /**
   * Inappropriate due to ...
   */
  Inappropriatedueto: "??",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenAppropriatenessCode =
  typeof Hl7VSSpecimenAppropriatenessCode[keyof typeof Hl7VSSpecimenAppropriatenessCode];
