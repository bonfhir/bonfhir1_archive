/**
 * This value set includes LOINC codes that relate to Diagnostic Observations.
 * http://hl7.org/fhir/ValueSet/report-codes
 */
export const LOINCDiagnosticReportCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LOINCDiagnosticReportCodesCode =
  typeof LOINCDiagnosticReportCodesCode[keyof typeof LOINCDiagnosticReportCodesCode];
