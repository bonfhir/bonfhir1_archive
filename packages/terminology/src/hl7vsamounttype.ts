/**
 * Value Set of codes that specify amount quantity type.
 * http://terminology.hl7.org/ValueSet/v2-0146
 */
export const Hl7VSAmountTypeCode = {
  /**
   * Differential
   */
  Differential: "DF",

  /**
   * Limit
   */
  Limit: "LM",

  /**
   * Percentage
   */
  Percentage: "PC",

  /**
   * Rate
   */
  Rate: "RT",

  /**
   * Unlimited
   */
  Unlimited: "UL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAmountTypeCode =
  typeof Hl7VSAmountTypeCode[keyof typeof Hl7VSAmountTypeCode];
