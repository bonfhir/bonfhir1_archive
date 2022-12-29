/**
 * Proposed dosage exceeds standard practice
 * http://terminology.hl7.org/ValueSet/v3-DoseHighDetectedIssueCode
 */
export const DoseHighDetectedIssueCodeCode = {
  /**
   * High Dose Alert
   */
  HighDoseAlert: "DOSEH",

  /**
   * High Dose for Age Alert
   */
  HighDoseforAgeAlert: "DOSEHINDA",

  /**
   * High Dose for Indication Alert
   */
  HighDoseforIndicationAlert: "DOSEHIND",

  /**
   * High Dose for Height/Surface Area Alert
   */
  HighDoseforHeightSurfaceAreaAlert: "DOSEHINDSA",

  /**
   * High Dose for Weight Alert
   */
  HighDoseforWeightAlert: "DOSEHINDW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseHighDetectedIssueCodeCode =
  typeof DoseHighDetectedIssueCodeCode[keyof typeof DoseHighDetectedIssueCodeCode];
