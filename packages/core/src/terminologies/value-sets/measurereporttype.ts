/**
 * The type of the measure report.
 * http://hl7.org/fhir/ValueSet/measure-report-type
 */
export const MeasureReportTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureReportTypeCode =
  typeof MeasureReportTypeCode[keyof typeof MeasureReportTypeCode];
