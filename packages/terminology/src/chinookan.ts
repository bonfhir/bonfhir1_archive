/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Chinookan
 */
export const ChinookanCode = {
  /**
   * UpperChinook
   */
  _UpperChinook: "_UpperChinook",

  /**
   * Kiksht
   */
  "x-WAC": "x-WAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChinookanCode = typeof ChinookanCode[keyof typeof ChinookanCode];
