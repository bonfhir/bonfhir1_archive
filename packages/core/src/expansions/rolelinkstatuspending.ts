/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkStatusPending
 */
export const RoleLinkStatusPendingCode = {
  /**
   * pending
   */
  PENDING: "PENDING",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkStatusPendingCode =
  typeof RoleLinkStatusPendingCode[keyof typeof RoleLinkStatusPendingCode];
