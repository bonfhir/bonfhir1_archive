/**
 * Value Set of codes that specify amount quantity type.
 * http://terminology.hl7.org/ValueSet/v2-0146
 */
export const Hl7VSAmountTypeCode = {
  /**
   * Differential
   */
  DF: "DF",

  /**
   * Limit
   */
  LM: "LM",

  /**
   * Percentage
   */
  PC: "PC",

  /**
   * Rate
   */
  RT: "RT",

  /**
   * Unlimited
   */
  UL: "UL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAmountTypeCode =
  typeof Hl7VSAmountTypeCode[keyof typeof Hl7VSAmountTypeCode];
