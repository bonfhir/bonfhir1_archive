/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-BarDrugForm
 */
export const BarDrugFormCode = {
  /**
   * Bar
   */
  BAR: "BAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BarDrugFormCode =
  typeof BarDrugFormCode[keyof typeof BarDrugFormCode];
