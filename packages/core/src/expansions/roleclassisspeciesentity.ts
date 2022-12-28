/**
 * Relates a specialized material concept (player) to its generalization (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassIsSpeciesEntity
 */
export const RoleClassIsSpeciesEntityCode = {
  /**
   * has generalization
   */
  GEN: "GEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassIsSpeciesEntityCode =
  typeof RoleClassIsSpeciesEntityCode[keyof typeof RoleClassIsSpeciesEntityCode];
