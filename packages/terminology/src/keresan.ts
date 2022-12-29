/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Keresan
 */
export const KeresanCode = {
  /**
   * Rio Grande Keresan
   */
  RioGrandeKeresan: "x-KEE",

  /**
   * Acoma-Laguna
   */
  AcomaLaguna: "x-KJQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KeresanCode = typeof KeresanCode[keyof typeof KeresanCode];
