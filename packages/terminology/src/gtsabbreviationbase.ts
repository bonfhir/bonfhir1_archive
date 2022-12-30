/**
 * **Description:**Basic abbreviations defined for the General timing Specification data type.
 * http://terminology.hl7.org/ValueSet/v3-GTSAbbreviationBase
 */
export const GTSAbbreviationBaseCode = {
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
   * GTSAbbreviationHolidays
   */
  JH: "JH",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GTSAbbreviationBaseCode =
  typeof GTSAbbreviationBaseCode[keyof typeof GTSAbbreviationBaseCode];
