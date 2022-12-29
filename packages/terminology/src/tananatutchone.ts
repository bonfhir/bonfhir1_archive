/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TananaTutchone
 */
export const TananaTutchoneCode = {
  /**
   * Tanana
   */
  Tanana: "_Tanana",

  /**
   * Lower Tanana
   */
  LowerTanana: "x-TAA",

  /**
   * Upper Tanana
   */
  UpperTanana: "x-TAU",

  /**
   * Tanacross
   */
  Tanacross: "x-TCB",

  /**
   * Upper Kuskokwim
   */
  UpperKuskokwim: "x-KUU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TananaTutchoneCode =
  typeof TananaTutchoneCode[keyof typeof TananaTutchoneCode];
