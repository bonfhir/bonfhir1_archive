/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GTSAbbreviation
 */
export const GTSAbbreviationCode = {
  /**
   * AM
   */
  AM: "AM",

  /**
   * BID
   */
  BID: "BID",

  /**
   * JB
   */
  JB: "JB",

  /**
   * JE
   */
  JE: "JE",

  /**
   * PM
   */
  PM: "PM",

  /**
   * QID
   */
  QID: "QID",

  /**
   * TID
   */
  TID: "TID",

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
export type GTSAbbreviationCode =
  typeof GTSAbbreviationCode[keyof typeof GTSAbbreviationCode];
