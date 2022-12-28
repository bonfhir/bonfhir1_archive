/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-UpperChinook
 */
export const UpperChinookCode = {
  /**
   * Kiksht
   */
  "x-WAC": "x-WAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UpperChinookCode =
  typeof UpperChinookCode[keyof typeof UpperChinookCode];
