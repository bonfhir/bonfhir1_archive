/**
 * The source is an excerpt from the target.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipExcerpt
 */
export const ActRelationshipExcerptCode = {
  /**
   * Excerpts
   */
  XCRPT: "XCRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipExcerptCode =
  typeof ActRelationshipExcerptCode[keyof typeof ActRelationshipExcerptCode];
