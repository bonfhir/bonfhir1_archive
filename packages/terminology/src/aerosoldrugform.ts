/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AerosolDrugForm
 */
export const AerosolDrugFormCode = {
  /**
   * Aerosol
   */
  Aerosol: "AER",

  /**
   * Breath Activated Inhaler
   */
  BreathActivatedInhaler: "BAINHL",

  /**
   * Inhalant Solution
   */
  InhalantSolution: "INHLSOL",

  /**
   * Metered Dose Inhaler
   */
  MeteredDoseInhaler: "MDINHL",

  /**
   * Nasal Spray
   */
  NasalSpray: "NASSPRY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AerosolDrugFormCode =
  typeof AerosolDrugFormCode[keyof typeof AerosolDrugFormCode];
