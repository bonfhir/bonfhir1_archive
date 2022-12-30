/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GasLiquidMixture
 */
export const GasLiquidMixtureCode = {
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

  /**
   * Dermal Spray
   */
  DERMSPRY: "DERMSPRY",

  /**
   * Foam
   */
  FOAM: "FOAM",

  /**
   * Foam with Applicator
   */
  FOAMAPL: "FOAMAPL",

  /**
   * Rectal foam
   */
  RECFORM: "RECFORM",

  /**
   * Vaginal foam
   */
  VAGFOAM: "VAGFOAM",

  /**
   * Vaginal foam with applicator
   */
  VAGFOAMAPL: "VAGFOAMAPL",

  /**
   * Rectal Spray
   */
  RECSPRY: "RECSPRY",

  /**
   * Vaginal Spray
   */
  VAGSPRY: "VAGSPRY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GasLiquidMixtureCode =
  typeof GasLiquidMixtureCode[keyof typeof GasLiquidMixtureCode];
