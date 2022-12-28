/**
 * The state that represents a suspension of the Entity playing the Role. This state is arrived at from the "active" state.
 * http://terminology.hl7.org/ValueSet/v3-RoleStatusSuspended
 */
export const RoleStatusSuspendedCode = {
  /**
   * suspended
   */
  suspended: "suspended",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleStatusSuspendedCode =
  typeof RoleStatusSuspendedCode[keyof typeof RoleStatusSuspendedCode];
