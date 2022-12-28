/**
 * Value Set of codes used to specify the action requested of a party that receives an adjustment.
 * http://terminology.hl7.org/ValueSet/v2-0569
 */
export const Hl7VSAdjustmentActionCode = {
  /**
   * Print on EOB
   */
  EOB: "EOB",

  /**
   * Inform Patient
   */
  PAT: "PAT",

  /**
   * Inform Provider
   */
  PRO: "PRO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdjustmentActionCode =
  typeof Hl7VSAdjustmentActionCode[keyof typeof Hl7VSAdjustmentActionCode];
