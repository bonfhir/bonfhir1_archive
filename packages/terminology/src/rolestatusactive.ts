/**
 * The state representing the fact that the Entity is currently active in the Role.
 * http://terminology.hl7.org/ValueSet/v3-RoleStatusActive
 */
export const RoleStatusActiveCode = {
  /**
   * active
   */
  active: "active",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleStatusActiveCode =
  typeof RoleStatusActiveCode[keyof typeof RoleStatusActiveCode];
