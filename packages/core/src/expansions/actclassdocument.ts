/**
 * Specialization of Act to add the characteristics unique to document management services.
 * http://terminology.hl7.org/ValueSet/v3-ActClassDocument
 */
export const ActClassDocumentCode = {
  /**
   * document
   */
  DOC: "DOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassDocumentCode =
  typeof ActClassDocumentCode[keyof typeof ActClassDocumentCode];
