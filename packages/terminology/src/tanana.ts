/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Tanana
 */
export const TananaCode = {
  /**
   * Lower Tanana
   */
  "x-TAA": "x-TAA",

  /**
   * Upper Tanana
   */
  "x-TAU": "x-TAU",

  /**
   * Tanacross
   */
  "x-TCB": "x-TCB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TananaCode = typeof TananaCode[keyof typeof TananaCode];
