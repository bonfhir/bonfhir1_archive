/**
 * Material (player) sold by a retailer (scoper), who also give advice to prospective buyers.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassRetailedMaterial
 */
export const RoleClassRetailedMaterialCode = {
  /**
   * retailed material
   */
  RET: "RET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassRetailedMaterialCode =
  typeof RoleClassRetailedMaterialCode[keyof typeof RoleClassRetailedMaterialCode];
