/**
 * **Description:**Other, more specific, abbreviations defined for the General timing Specification data type, that are specializations of one of the Base concepts.
 * http://terminology.hl7.org/ValueSet/v3-GTSAbbreviationOther
 */
export const GTSAbbreviationOtherCode = {
  /**
   * GTSAbbreviationHolidays
   */
  JH: "JH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GTSAbbreviationOtherCode =
  typeof GTSAbbreviationOtherCode[keyof typeof GTSAbbreviationOtherCode];
