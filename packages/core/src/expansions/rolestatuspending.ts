/**
 * The state representing that fact that the role has not yet become active.
 * http://terminology.hl7.org/ValueSet/v3-RoleStatusPending
 */
export const RoleStatusPendingCode = {
  /**
   * pending
   */
  pending: "pending",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleStatusPendingCode =
  typeof RoleStatusPendingCode[keyof typeof RoleStatusPendingCode];
