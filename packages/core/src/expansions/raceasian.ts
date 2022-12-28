/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAsian
 */
export const RaceAsianCode = {
  /**
   * Asian
   */
  "2028-9": "2028-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAsianCode = typeof RaceAsianCode[keyof typeof RaceAsianCode];
