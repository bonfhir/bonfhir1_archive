/**
 * All codes from code system ActCode.\_IndividualCaseSafetyReportType
 * http://terminology.hl7.org/ValueSet/v3-IndividualCaseSafetyReportType
 */
export const IndividualCaseSafetyReportTypeCode = {
  /**
   * Individual Case Safety Report Type
   */
  _IndividualCaseSafetyReportType: "_IndividualCaseSafetyReportType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IndividualCaseSafetyReportTypeCode =
  typeof IndividualCaseSafetyReportTypeCode[keyof typeof IndividualCaseSafetyReportTypeCode];
