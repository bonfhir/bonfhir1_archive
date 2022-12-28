/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AerosolDrugForm
 */
export const AerosolDrugFormCode = {
  /**
   * Aerosol
   */
  AER: "AER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AerosolDrugFormCode =
  typeof AerosolDrugFormCode[keyof typeof AerosolDrugFormCode];
