/**
 * Used to enumerate the relationships between two clinical documents for document management.
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipDocument
 */
export const XActRelationshipDocumentCode = {
  /**
   * is appendage
   */
  APND: "APND",

  /**
   * replaces
   */
  RPLC: "RPLC",

  /**
   * transformation
   */
  XFRM: "XFRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipDocumentCode =
  typeof XActRelationshipDocumentCode[keyof typeof XActRelationshipDocumentCode];
