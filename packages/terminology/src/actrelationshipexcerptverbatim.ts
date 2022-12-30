/**
 * The source is a direct quote from the target.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipExcerptVerbatim
 */
export const ActRelationshipExcerptVerbatimCode = {
  /**
   * Excerpt verbatim
   */
  VRXCRPT: "VRXCRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipExcerptVerbatimCode =
  typeof ActRelationshipExcerptVerbatimCode[keyof typeof ActRelationshipExcerptVerbatimCode];
