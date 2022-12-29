/**
 * A material (player) that can be administered to an Entity (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAdministerableMaterial
 */
export const RoleClassAdministerableMaterialCode = {
  /**
   * Administerable Material
   */
  AdministerableMaterial: "ADMM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAdministerableMaterialCode =
  typeof RoleClassAdministerableMaterialCode[keyof typeof RoleClassAdministerableMaterialCode];
