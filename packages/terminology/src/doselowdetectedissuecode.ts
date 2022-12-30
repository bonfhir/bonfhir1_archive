/**
 * Proposed dosage is below suggested therapeutic levels
 * http://terminology.hl7.org/ValueSet/v3-DoseLowDetectedIssueCode
 */
export const DoseLowDetectedIssueCodeCode = {
  /**
   * Low Dose Alert
   */
  DOSEL: "DOSEL",

  /**
   * Low Dose for Age Alert
   */
  DOSELINDA: "DOSELINDA",

  /**
   * Low Dose for Indication Alert
   */
  DOSELIND: "DOSELIND",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  DOSELINDSA: "DOSELINDSA",

  /**
   * Low Dose for Weight Alert
   */
  DOSELINDW: "DOSELINDW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseLowDetectedIssueCodeCode =
  typeof DoseLowDetectedIssueCodeCode[keyof typeof DoseLowDetectedIssueCodeCode];
