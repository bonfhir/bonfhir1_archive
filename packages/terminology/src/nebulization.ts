/**
 * Nebulization
 * http://terminology.hl7.org/ValueSet/v3-Nebulization
 */
export const NebulizationCode = {
  /**
   * Nebulization, endotracheal tube
   */
  Nebulizationendotrachealtube: "ETNEB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NebulizationCode =
  typeof NebulizationCode[keyof typeof NebulizationCode];
