/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationAlert
 */
export const ObservationAlertCode = {
  /**
   * Observation Alert
   */
  OBSA: "OBSA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationAlertCode =
  typeof ObservationAlertCode[keyof typeof ObservationAlertCode];
