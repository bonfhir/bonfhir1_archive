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
   * business name
   */
  A: "A",

  /**
   * Anonymous
   */
  ANON: "ANON",

  /**
   * Indigenous/Tribal
   */
  I: "I",

  /**
   * Other/Pseudonym/Alias
   */
  P: "P",

  /**
   * religious
   */
  R: "R",

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
   * alphabetic
   */
  ABC: "ABC",

  /**
   * ideographic
   */
  IDE: "IDE",

  /**
   * syllabic
   */
  SYL: "SYL",

  /**
   * no longer in use
   */
  OLD: "OLD",

  /**
   * do not use
   */
  DN: "DN",

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
