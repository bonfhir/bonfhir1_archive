/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SuspensionDrugForm
 */
export const SuspensionDrugFormCode = {
  /**
   * Suspension
   */
  SUSP: "SUSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SuspensionDrugFormCode =
  typeof SuspensionDrugFormCode[keyof typeof SuspensionDrugFormCode];
