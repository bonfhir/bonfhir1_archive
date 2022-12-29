/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-LabResultReportingProcessStepCode
 */
export const LabResultReportingProcessStepCodeCode = {
  /**
   * corrected
   */
  corrected: "C",

  /**
   * final
   */
  final: "F",

  /**
   * preliminary
   */
  preliminary: "PRLMN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LabResultReportingProcessStepCodeCode =
  typeof LabResultReportingProcessStepCodeCode[keyof typeof LabResultReportingProcessStepCodeCode];
