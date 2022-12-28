/**
 * The terminal state resulting from cancellation of the role prior to activation.
 * http://terminology.hl7.org/ValueSet/v3-RoleStatusCancelled
 */
export const RoleStatusCancelledCode = {
  /**
   * cancelled
   */
  cancelled: "cancelled",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleStatusCancelledCode =
  typeof RoleStatusCancelledCode[keyof typeof RoleStatusCancelledCode];
