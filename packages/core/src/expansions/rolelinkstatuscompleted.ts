/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkStatusCompleted
 */
export const RoleLinkStatusCompletedCode = {
  /**
   * completed
   */
  COMPLETED: "COMPLETED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkStatusCompletedCode =
  typeof RoleLinkStatusCompletedCode[keyof typeof RoleLinkStatusCompletedCode];
