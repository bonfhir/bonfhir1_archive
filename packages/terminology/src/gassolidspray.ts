/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GasSolidSpray
 */
export const GasSolidSprayCode = {
  /**
   * Inhalant
   */
  Inhalant: "INHL",

  /**
   * Breath Activated Powder Inhaler
   */
  BreathActivatedPowderInhaler: "BAINHLPWD",

  /**
   * Inhalant Powder
   */
  InhalantPowder: "INHLPWD",

  /**
   * Metered Dose Powder Inhaler
   */
  MeteredDosePowderInhaler: "MDINHLPWD",

  /**
   * Nasal Inhalant
   */
  NasalInhalant: "NASINHL",

  /**
   * Oral Inhalant
   */
  OralInhalant: "ORINHL",

  /**
   * Powder Spray
   */
  PowderSpray: "PWDSPRY",

  /**
   * Spray with Adaptor
   */
  SpraywithAdaptor: "SPRYADAPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GasSolidSprayCode =
  typeof GasSolidSprayCode[keyof typeof GasSolidSprayCode];
