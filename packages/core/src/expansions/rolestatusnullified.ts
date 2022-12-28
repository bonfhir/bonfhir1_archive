/**
 * The state representing the termination of a Role instance that was created in error.
 * http://terminology.hl7.org/ValueSet/v3-RoleStatusNullified
 */
export const RoleStatusNullifiedCode = {
  /**
   * nullified
   */
  nullified: "nullified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleStatusNullifiedCode =
  typeof RoleStatusNullifiedCode[keyof typeof RoleStatusNullifiedCode];
