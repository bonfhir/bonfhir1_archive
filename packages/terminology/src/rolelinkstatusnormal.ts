/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkStatusNormal
 */
export const RoleLinkStatusNormalCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkStatusNormalCode =
  typeof RoleLinkStatusNormalCode[keyof typeof RoleLinkStatusNormalCode];
