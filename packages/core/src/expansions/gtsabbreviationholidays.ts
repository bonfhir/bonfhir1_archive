/**
 * Holidays
 * http://terminology.hl7.org/ValueSet/v3-GTSAbbreviationHolidays
 */
export const GTSAbbreviationHolidaysCode = {
  /**
   * GTSAbbreviationHolidays
   */
  JH: "JH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GTSAbbreviationHolidaysCode =
  typeof GTSAbbreviationHolidaysCode[keyof typeof GTSAbbreviationHolidaysCode];
