/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkStatus
 */
export const RoleLinkStatusCode = {
  /**
   * normal
   */
  normal: "NORMAL",

  /**
   * active
   */
  active: "ACTIVE",

  /**
   * cancelled
   */
  cancelled: "CANCELLED",

  /**
   * completed
   */
  completed: "COMPLETED",

  /**
   * pending
   */
  pending: "PENDING",

  /**
   * nullified
   */
  nullified: "NULLIFIED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkStatusCode =
  typeof RoleLinkStatusCode[keyof typeof RoleLinkStatusCode];
