/**
 * The reported execution result.
 * http://hl7.org/fhir/ValueSet/report-result-codes
 */
export const TestReportResultCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestReportResultCode =
  typeof TestReportResultCode[keyof typeof TestReportResultCode];
