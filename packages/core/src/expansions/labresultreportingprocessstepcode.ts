/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-LabResultReportingProcessStepCode
 */
export const LabResultReportingProcessStepCodeCode = {
  /**
   * corrected
   */
  C: "C",

  /**
   * final
   */
  F: "F",

  /**
   * preliminary
   */
  PRLMN: "PRLMN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LabResultReportingProcessStepCodeCode =
  typeof LabResultReportingProcessStepCodeCode[keyof typeof LabResultReportingProcessStepCodeCode];
