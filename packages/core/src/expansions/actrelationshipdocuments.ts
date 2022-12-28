/**
 * The source act documents the target act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipDocuments
 */
export const ActRelationshipDocumentsCode = {
  /**
   * documents
   */
  DOC: "DOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipDocumentsCode =
  typeof ActRelationshipDocumentsCode[keyof typeof ActRelationshipDocumentsCode];
