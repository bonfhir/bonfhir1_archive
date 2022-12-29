/**
 * Proposed therapy may be inappropriate based on the patient's height or body surface area
 * http://terminology.hl7.org/ValueSet/v3-HeightSurfaceAreaAlert
 */
export const HeightSurfaceAreaAlertCode = {
  /**
   * High Dose for Height/Surface Area Alert
   */
  HighDoseforHeightSurfaceAreaAlert: "DOSEHINDSA",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  LowDoseforHeightSurfaceAreaAlert: "DOSELINDSA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HeightSurfaceAreaAlertCode =
  typeof HeightSurfaceAreaAlertCode[keyof typeof HeightSurfaceAreaAlertCode];
