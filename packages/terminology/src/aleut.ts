/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Aleut
 */
export const AleutCode = {
  /**
   * Aleut
   */
  Aleut: "x-ALW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AleutCode = typeof AleutCode[keyof typeof AleutCode];
