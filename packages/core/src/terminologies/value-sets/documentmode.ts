/**
 * Whether the application produces or consumes documents.
 * http://hl7.org/fhir/ValueSet/document-mode
 */
export const DocumentModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentModeCode =
  typeof DocumentModeCode[keyof typeof DocumentModeCode];
