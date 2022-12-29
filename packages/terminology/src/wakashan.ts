/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Wakashan
 */
export const WakashanCode = {
  /**
   * Nootkan
   */
  Nootkan: "_Nootkan",

  /**
   * Makah
   */
  Makah: "x-MYH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WakashanCode = typeof WakashanCode[keyof typeof WakashanCode];
