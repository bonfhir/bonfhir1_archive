/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Nootkan
 */
export const NootkanCode = {
  /**
   * Makah
   */
  Makah: "x-MYH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NootkanCode = typeof NootkanCode[keyof typeof NootkanCode];
