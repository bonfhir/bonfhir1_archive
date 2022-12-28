/**
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 * http://hl7.org/fhir/ValueSet/evidence-report-type
 */
export const EvidenceReportTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceReportTypeCode =
  typeof EvidenceReportTypeCode[keyof typeof EvidenceReportTypeCode];
