/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PostalAddressUse
 */
export const PostalAddressUseCode = {
  /**
   * bad address
   */
  BAD: "BAD",

  /**
   * direct
   */
  DIR: "DIR",

  /**
   * home address
   */
  H: "H",

  /**
   * primary home
   */
  HP: "HP",

  /**
   * vacation home
   */
  HV: "HV",

  /**
   * physical visit address
   */
  PHYS: "PHYS",

  /**
   * postal address
   */
  PST: "PST",

  /**
   * public
   */
  PUB: "PUB",

  /**
   * temporary address
   */
  TMP: "TMP",

  /**
   * work place
   */
  WP: "WP",

  /**
   * Alphabetic
   */
  ABC: "ABC",

  /**
   * Ideographic
   */
  IDE: "IDE",

  /**
   * Syllabic
   */
  SYL: "SYL",

  /**
   * search
   */
  SRCH: "SRCH",

  /**
   * phonetic
   */
  PHON: "PHON",

  /**
   * Soundex
   */
  SNDX: "SNDX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PostalAddressUseCode =
  typeof PostalAddressUseCode[keyof typeof PostalAddressUseCode];
