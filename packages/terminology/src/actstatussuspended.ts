/**
 * An Act that has been activated (actions could or have been performed against it), but has been temporarily disabled. No further action should be taken against it until it is released
 * http://terminology.hl7.org/ValueSet/v3-ActStatusSuspended
 */
export const ActStatusSuspendedCode = {
  /**
   * suspended
   */
  suspended: "suspended",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusSuspendedCode =
  typeof ActStatusSuspendedCode[keyof typeof ActStatusSuspendedCode];
