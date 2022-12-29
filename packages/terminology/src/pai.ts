/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Pai
 */
export const PaiCode = {
  /**
   * Havasupai
   */
  Havasupai: "x-YUF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PaiCode = typeof PaiCode[keyof typeof PaiCode];
