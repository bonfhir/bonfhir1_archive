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
  businessname: "A",

  /**
   * Anonymous
   */
  Anonymous: "ANON",

  /**
   * Indigenous/Tribal
   */
  IndigenousTribal: "I",

  /**
   * Other/Pseudonym/Alias
   */
  OtherPseudonymAlias: "P",

  /**
   * religious
   */
  religious: "R",

  /**
   * customary
   */
  customary: "C",

  /**
   * customary
   */
  customary: "N",

  /**
   * maiden name
   */
  maidenname: "M",

  /**
   * NameRepresentationUse
   */
  NameRepresentationUse: "NameRepresentationUse",

  /**
   * alphabetic
   */
  alphabetic: "ABC",

  /**
   * ideographic
   */
  ideographic: "IDE",

  /**
   * syllabic
   */
  syllabic: "SYL",

  /**
   * no longer in use
   */
  nolongerinuse: "OLD",

  /**
   * do not use
   */
  donotuse: "DN",

  /**
   * official registry name
   */
  officialregistryname: "OR",

  /**
   * phonetic
   */
  phonetic: "PHON",

  /**
   * search
   */
  search: "SRCH",

  /**
   * temporary
   */
  temporary: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityNameUseR2Code =
  typeof EntityNameUseR2Code[keyof typeof EntityNameUseR2Code];
