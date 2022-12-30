/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AerosolDrugForm
 */
export const AerosolDrugFormCode = {
  /**
   * Aerosol
   */
  AER: "AER",

  /**
   * Breath Activated Inhaler
   */
  BAINHL: "BAINHL",

  /**
   * Inhalant Solution
   */
  INHLSOL: "INHLSOL",

  /**
   * Metered Dose Inhaler
   */
  MDINHL: "MDINHL",

  /**
   * Nasal Spray
   */
  NASSPRY: "NASSPRY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AerosolDrugFormCode =
  typeof AerosolDrugFormCode[keyof typeof AerosolDrugFormCode];
