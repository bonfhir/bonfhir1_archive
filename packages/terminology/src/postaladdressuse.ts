/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PostalAddressUse
 */
export const PostalAddressUseCode = {
  /**
   * bad address
   */
  badaddress: "BAD",

  /**
   * direct
   */
  direct: "DIR",

  /**
   * home address
   */
  homeaddress: "H",

  /**
   * primary home
   */
  primaryhome: "HP",

  /**
   * vacation home
   */
  vacationhome: "HV",

  /**
   * physical visit address
   */
  physicalvisitaddress: "PHYS",

  /**
   * postal address
   */
  postaladdress: "PST",

  /**
   * public
   */
  public: "PUB",

  /**
   * temporary address
   */
  temporaryaddress: "TMP",

  /**
   * work place
   */
  workplace: "WP",

  /**
   * Alphabetic
   */
  Alphabetic: "ABC",

  /**
   * Ideographic
   */
  Ideographic: "IDE",

  /**
   * Syllabic
   */
  Syllabic: "SYL",

  /**
   * search
   */
  search: "SRCH",

  /**
   * phonetic
   */
  phonetic: "PHON",

  /**
   * Soundex
   */
  Soundex: "SNDX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PostalAddressUseCode =
  typeof PostalAddressUseCode[keyof typeof PostalAddressUseCode];
