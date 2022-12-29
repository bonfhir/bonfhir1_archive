/**
 * The reasons that may be used when relating a Quality Measure Document to other document types.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipDocumentHQMF
 */
export const ActRelationshipDocumentHQMFCode = {
  /**
   * has component
   */
  hascomponent: "COMP",

  /**
   * is derived from
   */
  isderivedfrom: "DRIV",

  /**
   * replaces
   */
  replaces: "RPLC",

  /**
   * uses
   */
  uses: "USE",

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
export type ActRelationshipDocumentHQMFCode =
  typeof ActRelationshipDocumentHQMFCode[keyof typeof ActRelationshipDocumentHQMFCode];
