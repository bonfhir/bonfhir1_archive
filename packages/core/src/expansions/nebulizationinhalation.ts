/**
 * Inhalation, nebulization
 * http://terminology.hl7.org/ValueSet/v3-NebulizationInhalation
 */
export const NebulizationInhalationCode = {
  /**
   * Inhalation, nebulization
   */
  NEB: "NEB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NebulizationInhalationCode =
  typeof NebulizationInhalationCode[keyof typeof NebulizationInhalationCode];
