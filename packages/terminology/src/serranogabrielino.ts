/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SerranoGabrielino
 */
export const SerranoGabrielinoCode = {
  /**
   * Serrano
   */
  Serrano: "x-SER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SerranoGabrielinoCode =
  typeof SerranoGabrielinoCode[keyof typeof SerranoGabrielinoCode];
