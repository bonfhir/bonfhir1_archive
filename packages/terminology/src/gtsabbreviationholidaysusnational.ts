/**
 * United States National Holidays (public holidays for federal employees established by U.S. Federal law 5 U.S.C. 6103.)
 * http://terminology.hl7.org/ValueSet/v3-GTSAbbreviationHolidaysUSNational
 */
export const GTSAbbreviationHolidaysUSNationalCode = {
  /**
   * GTSAbbreviationHolidaysUSNational
   */
  JHNUS: "JHNUS",

  /**
   * JHNUSCLM
   */
  JHNUSCLM: "JHNUSCLM",

  /**
   * JHNUSIND
   */
  JHNUSIND: "JHNUSIND",

  /**
   * JHNUSIND1
   */
  JHNUSIND1: "JHNUSIND1",

  /**
   * JHNUSIND5
   */
  JHNUSIND5: "JHNUSIND5",

  /**
   * JHNUSLBR
   */
  JHNUSLBR: "JHNUSLBR",

  /**
   * JHNUSMEM
   */
  JHNUSMEM: "JHNUSMEM",

  /**
   * JHNUSMEM5
   */
  JHNUSMEM5: "JHNUSMEM5",

  /**
   * JHNUSMEM6
   */
  JHNUSMEM6: "JHNUSMEM6",

  /**
   * JHNUSMLK
   */
  JHNUSMLK: "JHNUSMLK",

  /**
   * JHNUSPRE
   */
  JHNUSPRE: "JHNUSPRE",

  /**
   * JHNUSTKS
   */
  JHNUSTKS: "JHNUSTKS",

  /**
   * JHNUSTKS5
   */
  JHNUSTKS5: "JHNUSTKS5",

  /**
   * JHNUSVET
   */
  JHNUSVET: "JHNUSVET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GTSAbbreviationHolidaysUSNationalCode =
  typeof GTSAbbreviationHolidaysUSNationalCode[keyof typeof GTSAbbreviationHolidaysUSNationalCode];
