/**
 * Value Set of codes that specify whether the amount is currency or a percentage.
 * http://terminology.hl7.org/ValueSet/v2-0148
 */
export const Hl7VSPenaltyTypeCode = {
  /**
   * Currency amount
   */
  AT: "AT",

  /**
   * Percentage
   */
  PC: "PC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPenaltyTypeCode =
  typeof Hl7VSPenaltyTypeCode[keyof typeof Hl7VSPenaltyTypeCode];
