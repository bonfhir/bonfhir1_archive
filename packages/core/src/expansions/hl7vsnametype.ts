/**
 * Concepts for types of names for persons.
 * http://terminology.hl7.org/ValueSet/v2-0200
 */
export const Hl7VSNameTypeCode = {
  /**
   * Other
   */
  O: "O",

  /**
   * Assigned
   */
  A: "A",

  /**
   * Birth name
   */
  B: "B",

  /**
   * Bad Name
   */
  BAD: "BAD",

  /**
   * Adopted Name
   */
  C: "C",

  /**
   * Customary Name
   */
  D: "D",

  /**
   * Fathers Name
   */
  F: "F",

  /**
   * Licensing Name
   */
  I: "I",

  /**
   * Business name
   */
  K: "K",

  /**
   * Official Registry Name
   */
  L: "L",

  /**
   * Maiden Name
   */
  M: "M",

  /**
   * Masked
   */
  MSK: "MSK",

  /**
   * Nickname
   */
  N: "N",

  /**
   * Temporarily Unavailable
   */
  NAV: "NAV",

  /**
   * Newborn Name
   */
  NB: "NB",

  /**
   * No Longer To Be Used
   */
  NOUSE: "NOUSE",

  /**
   * Name of Partner/Spouse
   */
  P: "P",

  /**
   * Registered Name
   */
  R: "R",

  /**
   * Religious
   */
  REL: "REL",

  /**
   * Pseudonym
   */
  S: "S",

  /**
   * Indigenous/Tribal
   */
  T: "T",

  /**
   * Temporary Name
   */
  TEMP: "TEMP",

  /**
   * Unknown
   */
  U: "U",

  /**
   * No suggested values defined
   */
  "...": "...",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNameTypeCode =
  typeof Hl7VSNameTypeCode[keyof typeof Hl7VSNameTypeCode];
