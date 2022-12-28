/**
 * Used to convey the relationship between two or more Documents for purpose of tracking provenance relationships such as a predecessor Document and a successor Document.

For example, a predecessor Clinical Summary Document from which a successor Clinical Summary Document is derived.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipDocumentProvenance
 */
export const ActRelationshipDocumentProvenanceCode = {
  /**
   * is appendage
   */
  APND: "APND",

  /**
   * has component
   */
  COMP: "COMP",

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
export type ActRelationshipDocumentProvenanceCode =
  typeof ActRelationshipDocumentProvenanceCode[keyof typeof ActRelationshipDocumentProvenanceCode];
