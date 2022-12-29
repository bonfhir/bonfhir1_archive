/**
 * Proposed dosage is below suggested therapeutic levels
 * http://terminology.hl7.org/ValueSet/v3-DoseLowDetectedIssueCode
 */
export const DoseLowDetectedIssueCodeCode = {
  /**
   * Low Dose Alert
   */
  LowDoseAlert: "DOSEL",

  /**
   * Low Dose for Age Alert
   */
  LowDoseforAgeAlert: "DOSELINDA",

  /**
   * Low Dose for Indication Alert
   */
  LowDoseforIndicationAlert: "DOSELIND",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  LowDoseforHeightSurfaceAreaAlert: "DOSELINDSA",

  /**
   * Low Dose for Weight Alert
   */
  LowDoseforWeightAlert: "DOSELINDW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseLowDetectedIssueCodeCode =
  typeof DoseLowDetectedIssueCodeCode[keyof typeof DoseLowDetectedIssueCodeCode];
