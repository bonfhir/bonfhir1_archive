/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkStatusCancelled
 */
export const RoleLinkStatusCancelledCode = {
  /**
   * cancelled
   */
  CANCELLED: "CANCELLED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkStatusCancelledCode =
  typeof RoleLinkStatusCancelledCode[keyof typeof RoleLinkStatusCancelledCode];
