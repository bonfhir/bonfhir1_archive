/**
 * FHIR Document Codes - all LOINC codes where scale type = 'DOC'.
 * http://hl7.org/fhir/ValueSet/doc-typecodes
 */
export const FHIRDocumentTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRDocumentTypeCodesCode =
  typeof FHIRDocumentTypeCodesCode[keyof typeof FHIRDocumentTypeCodesCode];
