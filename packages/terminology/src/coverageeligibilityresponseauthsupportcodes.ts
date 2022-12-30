/**
 * This value set includes CoverageEligibilityResponse Auth Support codes.
 * http://terminology.hl7.org/ValueSet/coverageeligibilityresponse-ex-auth-support
 */
export const CoverageEligibilityResponseAuthSupportCodesCode = {
  /**
   * Lab Order
   */
  laborder: "laborder",

  /**
   * Lab Report
   */
  labreport: "labreport",

  /**
   * Diagnostic Image Order
   */
  diagnosticimageorder: "diagnosticimageorder",

  /**
   * Diagnostic Image Report
   */
  diagnosticimagereport: "diagnosticimagereport",

  /**
   * Professional Report
   */
  professionalreport: "professionalreport",

  /**
   * Accident Report
   */
  accidentreport: "accidentreport",

  /**
   * Model
   */
  model: "model",

  /**
   * Picture
   */
  picture: "picture",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageEligibilityResponseAuthSupportCodesCode =
  typeof CoverageEligibilityResponseAuthSupportCodesCode[keyof typeof CoverageEligibilityResponseAuthSupportCodesCode];
