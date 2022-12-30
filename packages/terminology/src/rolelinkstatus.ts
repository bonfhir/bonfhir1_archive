/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkStatus
 */
export const RoleLinkStatusCode = {
  /**
   * normal
   */
  NORMAL: "NORMAL",

  /**
   * active
   */
  ACTIVE: "ACTIVE",

  /**
   * cancelled
   */
  CANCELLED: "CANCELLED",

  /**
   * completed
   */
  COMPLETED: "COMPLETED",

  /**
   * pending
   */
  PENDING: "PENDING",

  /**
   * nullified
   */
  NULLIFIED: "NULLIFIED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkStatusCode =
  typeof RoleLinkStatusCode[keyof typeof RoleLinkStatusCode];
