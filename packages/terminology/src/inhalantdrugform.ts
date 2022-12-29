/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InhalantDrugForm
 */
export const InhalantDrugFormCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InhalantDrugFormCode =
  typeof InhalantDrugFormCode[keyof typeof InhalantDrugFormCode];
