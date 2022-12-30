/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TananaTutchone
 */
export const TananaTutchoneCode = {
  /**
   * Tanana
   */
  _Tanana: "_Tanana",

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

  /**
   * Upper Kuskokwim
   */
  "x-KUU": "x-KUU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TananaTutchoneCode =
  typeof TananaTutchoneCode[keyof typeof TananaTutchoneCode];
