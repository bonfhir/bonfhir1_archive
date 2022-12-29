/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Coosan
 */
export const CoosanCode = {
  /**
   * Hanis
   */
  Hanis: "x-COS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoosanCode = typeof CoosanCode[keyof typeof CoosanCode];
