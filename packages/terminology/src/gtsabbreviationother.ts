/**
 * **Description:**Other, more specific, abbreviations defined for the General timing Specification data type, that are specializations of one of the Base concepts.
 * http://terminology.hl7.org/ValueSet/v3-GTSAbbreviationOther
 */
export const GTSAbbreviationOtherCode = {
  /**
   * GTSAbbreviationHolidays
   */
  JH: "JH",

  /**
   * GTSAbbreviationHolidaysChristianRoman
   */
  _GTSAbbreviationHolidaysChristianRoman:
    "_GTSAbbreviationHolidaysChristianRoman",

  /**
   * JHCHREAS
   */
  JHCHREAS: "JHCHREAS",

  /**
   * JHCHRGFR
   */
  JHCHRGFR: "JHCHRGFR",

  /**
   * JHCHRNEW
   */
  JHCHRNEW: "JHCHRNEW",

  /**
   * JHCHRPEN
   */
  JHCHRPEN: "JHCHRPEN",

  /**
   * JHCHRXME
   */
  JHCHRXME: "JHCHRXME",

  /**
   * JHCHRXMS
   */
  JHCHRXMS: "JHCHRXMS",

  /**
   * The Netherlands National Holidays
   */
  JHNNL: "JHNNL",

  /**
   * Liberation day (May 5 every five years)
   */
  JHNNLLD: "JHNNLLD",

  /**
   * Queen's day (April 30)
   */
  JHNNLQD: "JHNNLQD",

  /**
   * Sinterklaas (December 5)
   */
  JHNNLSK: "JHNNLSK",

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
export type GTSAbbreviationOtherCode =
  typeof GTSAbbreviationOtherCode[keyof typeof GTSAbbreviationOtherCode];
