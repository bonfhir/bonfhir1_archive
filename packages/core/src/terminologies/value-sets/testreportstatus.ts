/**
 * The current status of the test report.
 * http://hl7.org/fhir/ValueSet/report-status-codes
 */
export const TestReportStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestReportStatusCode =
  typeof TestReportStatusCode[keyof typeof TestReportStatusCode];
