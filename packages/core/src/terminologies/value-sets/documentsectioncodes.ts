/**
 * Document section codes (LOINC codes used in CCDA sections).
 * http://hl7.org/fhir/ValueSet/doc-section-codes
 */
export const DocumentSectionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentSectionCodesCode =
  typeof DocumentSectionCodesCode[keyof typeof DocumentSectionCodesCode];
