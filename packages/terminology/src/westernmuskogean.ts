/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-WesternMuskogean
 */
export const WesternMuskogeanCode = {
  /**
   * Choctaw
   */
  "x-CCT": "x-CCT",

  /**
   * Chickasaw
   */
  "x-CIC": "x-CIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WesternMuskogeanCode =
  typeof WesternMuskogeanCode[keyof typeof WesternMuskogeanCode];
