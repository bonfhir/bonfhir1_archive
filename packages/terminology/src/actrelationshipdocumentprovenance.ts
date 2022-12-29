/**
 * Used to convey the relationship between two or more Documents for purpose of tracking provenance relationships such as a predecessor Document and a successor Document.

For example, a predecessor Clinical Summary Document from which a successor Clinical Summary Document is derived.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipDocumentProvenance
 */
export const ActRelationshipDocumentProvenanceCode = {
  /**
   * is appendage
   */
  isappendage: "APND",

  /**
   * has component
   */
  hascomponent: "COMP",

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
export type ActRelationshipDocumentProvenanceCode =
  typeof ActRelationshipDocumentProvenanceCode[keyof typeof ActRelationshipDocumentProvenanceCode];
