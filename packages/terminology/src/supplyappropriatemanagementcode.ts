/**
 * Confirmed supply action appropriate
 * http://terminology.hl7.org/ValueSet/v3-SupplyAppropriateManagementCode
 */
export const SupplyAppropriateManagementCodeCode = {
  /**
   * Supply Appropriate
   */
  "14": "14",

  /**
   * Replacement
   */
  "15": "15",

  /**
   * Vacation Supply
   */
  "16": "16",

  /**
   * Weekend Supply
   */
  "17": "17",

  /**
   * Leave of Absence
   */
  "18": "18",

  /**
   * additional quantity on separate dispense
   */
  "20": "20",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyAppropriateManagementCodeCode =
  typeof SupplyAppropriateManagementCodeCode[keyof typeof SupplyAppropriateManagementCodeCode];
