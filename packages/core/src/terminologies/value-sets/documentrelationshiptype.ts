/**
 * The type of relationship between documents.
 * http://hl7.org/fhir/ValueSet/document-relationship-type
 */
export const DocumentRelationshipTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentRelationshipTypeCode =
  typeof DocumentRelationshipTypeCode[keyof typeof DocumentRelationshipTypeCode];
