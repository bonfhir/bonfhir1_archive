/**
 * The results of executing an action.
 * http://hl7.org/fhir/ValueSet/report-action-result-codes
 */
export const TestReportActionResultCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestReportActionResultCode =
  typeof TestReportActionResultCode[keyof typeof TestReportActionResultCode];
