/**
 * Confirmed supply action appropriate
 * http://terminology.hl7.org/ValueSet/v3-SupplyAppropriateManagementCode
 */
export const SupplyAppropriateManagementCodeCode = {
  /**
   * Supply Appropriate
   */
  "14": "14",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyAppropriateManagementCodeCode =
  typeof SupplyAppropriateManagementCodeCode[keyof typeof SupplyAppropriateManagementCodeCode];
