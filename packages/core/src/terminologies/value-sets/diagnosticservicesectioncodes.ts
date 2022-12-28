/**
 * This value set includes all the codes in HL7 V2 table 0074.
 * http://hl7.org/fhir/ValueSet/diagnostic-service-sections
 */
export const DiagnosticServiceSectionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiagnosticServiceSectionCodesCode =
  typeof DiagnosticServiceSectionCodesCode[keyof typeof DiagnosticServiceSectionCodesCode];
