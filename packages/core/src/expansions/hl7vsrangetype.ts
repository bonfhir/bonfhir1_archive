/**
 * Value Set of codes that specify whether a composite price range is experssed as a flat rate or a percentage.
 * http://terminology.hl7.org/ValueSet/v2-0298
 */
export const Hl7VSRangeTypeCode = {
  /**
   * Pro-rate. Apply this price to this interval, pro-rated by whatever portion of the interval has occurred/been consumed
   */
  P: "P",

  /**
   * Flat-rate. Apply the entire price to this interval, do not pro-rate the price if the full interval has not occurred/been consumed
   */
  F: "F",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRangeTypeCode =
  typeof Hl7VSRangeTypeCode[keyof typeof Hl7VSRangeTypeCode];
