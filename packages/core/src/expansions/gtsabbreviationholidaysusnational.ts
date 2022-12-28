/**
 * United States National Holidays (public holidays for federal employees established by U.S. Federal law 5 U.S.C. 6103.)
 * http://terminology.hl7.org/ValueSet/v3-GTSAbbreviationHolidaysUSNational
 */
export const GTSAbbreviationHolidaysUSNationalCode = {
  /**
   * GTSAbbreviationHolidaysUSNational
   */
  JHNUS: "JHNUS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GTSAbbreviationHolidaysUSNationalCode =
  typeof GTSAbbreviationHolidaysUSNationalCode[keyof typeof GTSAbbreviationHolidaysUSNationalCode];
