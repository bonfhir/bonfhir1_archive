/**
 * Used to enumerate the relationships between two clinical documents for document management.
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipDocument
 */
export const XActRelationshipDocumentCode = {
  /**
   * is appendage
   */
  isappendage: "APND",

  /**
   * replaces
   */
  replaces: "RPLC",

  /**
   * transformation
   */
  transformation: "XFRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipDocumentCode =
  typeof XActRelationshipDocumentCode[keyof typeof XActRelationshipDocumentCode];
