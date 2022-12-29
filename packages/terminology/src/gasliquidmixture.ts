/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GasLiquidMixture
 */
export const GasLiquidMixtureCode = {
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

  /**
   * Dermal Spray
   */
  DermalSpray: "DERMSPRY",

  /**
   * Foam
   */
  Foam: "FOAM",

  /**
   * Foam with Applicator
   */
  FoamwithApplicator: "FOAMAPL",

  /**
   * Rectal foam
   */
  Rectalfoam: "RECFORM",

  /**
   * Vaginal foam
   */
  Vaginalfoam: "VAGFOAM",

  /**
   * Vaginal foam with applicator
   */
  Vaginalfoamwithapplicator: "VAGFOAMAPL",

  /**
   * Rectal Spray
   */
  RectalSpray: "RECSPRY",

  /**
   * Vaginal Spray
   */
  VaginalSpray: "VAGSPRY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GasLiquidMixtureCode =
  typeof GasLiquidMixtureCode[keyof typeof GasLiquidMixtureCode];
