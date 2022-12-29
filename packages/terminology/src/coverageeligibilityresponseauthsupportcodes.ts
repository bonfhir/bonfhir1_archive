/**
 * This value set includes CoverageEligibilityResponse Auth Support codes.
 * http://terminology.hl7.org/ValueSet/coverageeligibilityresponse-ex-auth-support
 */
export const CoverageEligibilityResponseAuthSupportCodesCode = {
  /**
   * Lab Order
   */
  LabOrder: "laborder",

  /**
   * Lab Report
   */
  LabReport: "labreport",

  /**
   * Diagnostic Image Order
   */
  DiagnosticImageOrder: "diagnosticimageorder",

  /**
   * Diagnostic Image Report
   */
  DiagnosticImageReport: "diagnosticimagereport",

  /**
   * Professional Report
   */
  ProfessionalReport: "professionalreport",

  /**
   * Accident Report
   */
  AccidentReport: "accidentreport",

  /**
   * Model
   */
  Model: "model",

  /**
   * Picture
   */
  Picture: "picture",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageEligibilityResponseAuthSupportCodesCode =
  typeof CoverageEligibilityResponseAuthSupportCodesCode[keyof typeof CoverageEligibilityResponseAuthSupportCodesCode];
