/**
 * All codes from code system ActCode.\_IndividualCaseSafetyReportType
 * http://terminology.hl7.org/ValueSet/v3-IndividualCaseSafetyReportType
 */
export const IndividualCaseSafetyReportTypeCode = {
  /**
   * Individual Case Safety Report Type
   */
  _IndividualCaseSafetyReportType: "_IndividualCaseSafetyReportType",

  /**
   * patient adverse event
   */
  PAT_ADV_EVNT: "PAT_ADV_EVNT",

  /**
   * vaccine product problem
   */
  VAC_PROBLEM: "VAC_PROBLEM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IndividualCaseSafetyReportTypeCode =
  typeof IndividualCaseSafetyReportTypeCode[keyof typeof IndividualCaseSafetyReportTypeCode];
