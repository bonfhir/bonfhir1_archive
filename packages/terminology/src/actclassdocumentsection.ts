/**
 * A context that subdivides the body of a document. Document sections are typically used for human navigation, to give a reader a clue as to the expected content. Document sections are used to organize and provide consistency to the contents of a document body. Document sections can contain document sections and can contain entries.
 * http://terminology.hl7.org/ValueSet/v3-ActClassDocumentSection
 */
export const ActClassDocumentSectionCode = {
  /**
   * document section
   */
  documentsection: "DOCSECT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassDocumentSectionCode =
  typeof ActClassDocumentSectionCode[keyof typeof ActClassDocumentSectionCode];
