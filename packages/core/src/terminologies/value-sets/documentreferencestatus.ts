/**
 * The status of the document reference.
 * http://hl7.org/fhir/ValueSet/document-reference-status
 */
export const DocumentReferenceStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentReferenceStatusCode =
  typeof DocumentReferenceStatusCode[keyof typeof DocumentReferenceStatusCode];
