/**
 * Evidence Report Section Type.
 * http://hl7.org/fhir/ValueSet/evidence-report-section
 */
export const ReportSectionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReportSectionTypeCode =
  typeof ReportSectionTypeCode[keyof typeof ReportSectionTypeCode];
