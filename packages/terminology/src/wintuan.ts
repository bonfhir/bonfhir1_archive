/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Wintuan
 */
export const WintuanCode = {
  /**
   * Wintu-Nomlaki
   */
  "x-WIT": "x-WIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WintuanCode = typeof WintuanCode[keyof typeof WintuanCode];
