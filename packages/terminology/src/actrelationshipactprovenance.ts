/**
 * Used to convey the relationship between two or more Acts for purpose of tracking provenance relationships such as the following:

 *  A predecessor Act and a successor Act (e.g., a predecessor Lab Result from which a successor Lab Result in derived)
 *  A ProvenanceEvent Act and a target Act for which it records the Provenance (e.g., a target Act is an update of a predecessor Act)
 *  A predecessor ProvenanceEvent Act and a successor ProvenanceEvent Act

*UsageConstraint:* The v:ActRelationshipActProvenance is intended to limit the types of relationships that could be conveyed by the ActRelationshipType codes to a subset that pertains to these provenance relations.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipActProvenance
 */
export const ActRelationshipActProvenanceCode = {
  /**
   * has component
   */
  hascomponent: "COMP",

  /**
   * has subject
   */
  hassubject: "SUBJ",

  /**
   * succeeds
   */
  succeeds: "SUCC",

  /**
   * updates (condition)
   */
  updatescondition: "UPDT",

  /**
   * Excerpts
   */
  Excerpts: "XCRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipActProvenanceCode =
  typeof ActRelationshipActProvenanceCode[keyof typeof ActRelationshipActProvenanceCode];
