/**
 * Corresponds to the Role class
 * http://terminology.hl7.org/ValueSet/v3-RoleClassRoot
 */
export const RoleClassRootCode = {
  /**
   * role
   */
  ROL: "ROL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassRootCode =
  typeof RoleClassRootCode[keyof typeof RoleClassRootCode];
