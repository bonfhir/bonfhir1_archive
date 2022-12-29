/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipDocumentSPL
 */
export const XActRelationshipDocumentSPLCode = {
  /**
   * is appendage
   */
  isappendage: "APND",

  /**
   * is derived from
   */
  isderivedfrom: "DRIV",

  /**
   * replaces
   */
  replaces: "RPLC",

  /**
   * Excerpts
   */
  Excerpts: "XCRPT",

  /**
   * transformation
   */
  transformation: "XFRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipDocumentSPLCode =
  typeof XActRelationshipDocumentSPLCode[keyof typeof XActRelationshipDocumentSPLCode];
