/**
 * The status of the diagnostic report.
 * http://hl7.org/fhir/ValueSet/diagnostic-report-status
 */
export const DiagnosticReportStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiagnosticReportStatusCode =
  typeof DiagnosticReportStatusCode[keyof typeof DiagnosticReportStatusCode];
