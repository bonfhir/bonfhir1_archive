/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipDocumentSPL
 */
export const XActRelationshipDocumentSPLCode = {
  /**
   * is appendage
   */
  APND: "APND",

  /**
   * is derived from
   */
  DRIV: "DRIV",

  /**
   * replaces
   */
  RPLC: "RPLC",

  /**
   * Excerpts
   */
  XCRPT: "XCRPT",

  /**
   * transformation
   */
  XFRM: "XFRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipDocumentSPLCode =
  typeof XActRelationshipDocumentSPLCode[keyof typeof XActRelationshipDocumentSPLCode];
