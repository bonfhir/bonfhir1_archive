/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Chinookan
 */
export const ChinookanCode = {
  /**
   * UpperChinook
   */
  UpperChinook: "_UpperChinook",

  /**
   * Kiksht
   */
  Kiksht: "x-WAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChinookanCode = typeof ChinookanCode[keyof typeof ChinookanCode];
