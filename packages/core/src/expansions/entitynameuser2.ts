/**
 * **Description:**A set of codes advising a system or user which name in a set of names to select for a given purpose.
 * http://terminology.hl7.org/ValueSet/v3-EntityNameUseR2
 */
export const EntityNameUseR2Code = {
  /**
   * Assumed
   */
  Assumed: "Assumed",

  /**
   * customary
   */
  C: "C",

  /**
   * customary
   */
  N: "N",

  /**
   * maiden name
   */
  M: "M",

  /**
   * NameRepresentationUse
   */
  NameRepresentationUse: "NameRepresentationUse",

  /**
   * no longer in use
   */
  OLD: "OLD",

  /**
   * official registry name
   */
  OR: "OR",

  /**
   * phonetic
   */
  PHON: "PHON",

  /**
   * search
   */
  SRCH: "SRCH",

  /**
   * temporary
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNameUseR2Code =
  typeof EntityNameUseR2Code[keyof typeof EntityNameUseR2Code];
