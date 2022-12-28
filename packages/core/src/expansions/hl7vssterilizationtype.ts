/**
 * Value Set of codes specifying the type of sterilization used for sterilizing the inventory supply item in the ITM segment.
 * http://terminology.hl7.org/ValueSet/v2-0806
 */
export const Hl7VSSterilizationTypeCode = {
  /**
   * Ethylene Oxide Gas
   */
  EOG: "EOG",

  /**
   * Peracetic acid
   */
  PCA: "PCA",

  /**
   * Steam
   */
  STM: "STM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSterilizationTypeCode =
  typeof Hl7VSSterilizationTypeCode[keyof typeof Hl7VSSterilizationTypeCode];
