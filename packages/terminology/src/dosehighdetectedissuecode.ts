/**
 * Proposed dosage exceeds standard practice
 * http://terminology.hl7.org/ValueSet/v3-DoseHighDetectedIssueCode
 */
export const DoseHighDetectedIssueCodeCode = {
  /**
   * High Dose Alert
   */
  DOSEH: "DOSEH",

  /**
   * High Dose for Age Alert
   */
  DOSEHINDA: "DOSEHINDA",

  /**
   * High Dose for Indication Alert
   */
  DOSEHIND: "DOSEHIND",

  /**
   * High Dose for Height/Surface Area Alert
   */
  DOSEHINDSA: "DOSEHINDSA",

  /**
   * High Dose for Weight Alert
   */
  DOSEHINDW: "DOSEHINDW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseHighDetectedIssueCodeCode =
  typeof DoseHighDetectedIssueCodeCode[keyof typeof DoseHighDetectedIssueCodeCode];
