/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InhalantDrugForm
 */
export const InhalantDrugFormCode = {
  /**
   * Inhalant
   */
  INHL: "INHL",

  /**
   * Breath Activated Powder Inhaler
   */
  BAINHLPWD: "BAINHLPWD",

  /**
   * Inhalant Powder
   */
  INHLPWD: "INHLPWD",

  /**
   * Metered Dose Powder Inhaler
   */
  MDINHLPWD: "MDINHLPWD",

  /**
   * Nasal Inhalant
   */
  NASINHL: "NASINHL",

  /**
   * Oral Inhalant
   */
  ORINHL: "ORINHL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InhalantDrugFormCode =
  typeof InhalantDrugFormCode[keyof typeof InhalantDrugFormCode];
