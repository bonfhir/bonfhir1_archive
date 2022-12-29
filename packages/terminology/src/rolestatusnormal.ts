/**
 * The 'typical' state. Excludes "nullified" which represents the termination state of a Role instance that was created in error.
 * http://terminology.hl7.org/ValueSet/v3-RoleStatusNormal
 */
export const RoleStatusNormalCode = {
  /**
   * normal
   */
  normal: "normal",

  /**
   * active
   */
  active: "active",

  /**
   * cancelled
   */
  cancelled: "cancelled",

  /**
   * pending
   */
  pending: "pending",

  /**
   * suspended
   */
  suspended: "suspended",

  /**
   * terminated
   */
  terminated: "terminated",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleStatusNormalCode =
  typeof RoleStatusNormalCode[keyof typeof RoleStatusNormalCode];
