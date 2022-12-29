/**
 * Inhalation, nebulization
 * http://terminology.hl7.org/ValueSet/v3-NebulizationInhalation
 */
export const NebulizationInhalationCode = {
  /**
   * Inhalation, nebulization
   */
  Inhalationnebulization: "NEB",

  /**
   * Inhalation, nebulization, nasal
   */
  Inhalationnebulizationnasal: "NASNEB",

  /**
   * Inhalation, nebulization, oral
   */
  Inhalationnebulizationoral: "ORNEB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NebulizationInhalationCode =
  typeof NebulizationInhalationCode[keyof typeof NebulizationInhalationCode];
