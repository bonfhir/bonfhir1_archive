/**
 * Value Set of codes that specify a person's marital (civil/legal) status.
 * http://terminology.hl7.org/ValueSet/v2-0002
 */
export const Hl7VSMaritalStatusCode = {
  /**
   * Separated
   */
  A: "A",

  /**
   * Divorced
   */
  D: "D",

  /**
   * Married
   */
  M: "M",

  /**
   * Single
   */
  S: "S",

  /**
   * Widowed
   */
  W: "W",

  /**
   * Common law
   */
  C: "C",

  /**
   * Living together
   */
  G: "G",

  /**
   * Domestic partner
   */
  P: "P",

  /**
   * Registered domestic partner
   */
  R: "R",

  /**
   * Legally Separated
   */
  E: "E",

  /**
   * Annulled
   */
  N: "N",

  /**
   * Interlocutory
   */
  I: "I",

  /**
   * Unmarried
   */
  B: "B",

  /**
   * Unknown
   */
  U: "U",

  /**
   * Other
   */
  O: "O",

  /**
   * Unreported
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMaritalStatusCode =
  typeof Hl7VSMaritalStatusCode[keyof typeof Hl7VSMaritalStatusCode];
