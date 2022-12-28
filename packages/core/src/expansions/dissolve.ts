/**
 * Dissolve
 * http://terminology.hl7.org/ValueSet/v3-Dissolve
 */
export const DissolveCode = {
  /**
   * Dissolve, oral
   */
  DISSOLVE: "DISSOLVE",

  /**
   * Dissolve, sublingual
   */
  SL: "SL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DissolveCode = typeof DissolveCode[keyof typeof DissolveCode];
