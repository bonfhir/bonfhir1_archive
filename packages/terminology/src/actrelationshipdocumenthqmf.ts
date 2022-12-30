/**
 * The reasons that may be used when relating a Quality Measure Document to other document types.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipDocumentHQMF
 */
export const ActRelationshipDocumentHQMFCode = {
  /**
   * has component
   */
  COMP: "COMP",

  /**
   * is derived from
   */
  DRIV: "DRIV",

  /**
   * replaces
   */
  RPLC: "RPLC",

  /**
   * uses
   */
  USE: "USE",

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
export type ActRelationshipDocumentHQMFCode =
  typeof ActRelationshipDocumentHQMFCode[keyof typeof ActRelationshipDocumentHQMFCode];
