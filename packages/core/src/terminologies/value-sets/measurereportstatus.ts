/**
 * The status of the measure report.
 * http://hl7.org/fhir/ValueSet/measure-report-status
 */
export const MeasureReportStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureReportStatusCode =
  typeof MeasureReportStatusCode[keyof typeof MeasureReportStatusCode];
