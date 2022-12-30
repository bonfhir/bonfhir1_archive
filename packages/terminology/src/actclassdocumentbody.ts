/**
 * A context that distinguishes the body of a document from the document header. This is seen, for instance, in HTML documents, which have discrete <head> and <body> elements.
 * http://terminology.hl7.org/ValueSet/v3-ActClassDocumentBody
 */
export const ActClassDocumentBodyCode = {
  /**
   * document body
   */
  DOCBODY: "DOCBODY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassDocumentBodyCode =
  typeof ActClassDocumentBodyCode[keyof typeof ActClassDocumentBodyCode];
