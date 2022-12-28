/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yukian
 */
export const YukianCode = {
  /**
   * Wappo
   */
  "x-WAO": "x-WAO",

  /**
   * Yuki
   */
  "x-YUK": "x-YUK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YukianCode = typeof YukianCode[keyof typeof YukianCode];
