/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Shasta
 */
export const ShastaCode = {
  /**
   * Shasta
   */
  Shasta: "x-SHT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ShastaCode = typeof ShastaCode[keyof typeof ShastaCode];
