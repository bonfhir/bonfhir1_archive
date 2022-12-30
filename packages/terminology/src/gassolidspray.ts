/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GasSolidSpray
 */
export const GasSolidSprayCode = {
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

  /**
   * Powder Spray
   */
  PWDSPRY: "PWDSPRY",

  /**
   * Spray with Adaptor
   */
  SPRYADAPT: "SPRYADAPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GasSolidSprayCode =
  typeof GasSolidSprayCode[keyof typeof GasSolidSprayCode];
