/**
 * Value Set of codes that specify the amount quantity class.
 * http://terminology.hl7.org/ValueSet/v2-0193
 */
export const Hl7VSAmountClassCode = {
  /**
   * Amount
   */
  AT: "AT",

  /**
   * Limit
   */
  LM: "LM",

  /**
   * Percentage
   */
  PC: "PC",

  /**
   * Unlimited
   */
  UL: "UL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAmountClassCode =
  typeof Hl7VSAmountClassCode[keyof typeof Hl7VSAmountClassCode];
