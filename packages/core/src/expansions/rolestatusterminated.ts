/**
 * The state representing the successful termination of the Role.
 * http://terminology.hl7.org/ValueSet/v3-RoleStatusTerminated
 */
export const RoleStatusTerminatedCode = {
  /**
   * terminated
   */
  terminated: "terminated",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleStatusTerminatedCode =
  typeof RoleStatusTerminatedCode[keyof typeof RoleStatusTerminatedCode];
