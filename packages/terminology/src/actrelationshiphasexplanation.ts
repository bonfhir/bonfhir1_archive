/**
 * This is the inversion of support. Used to indicate that a given observation is explained by another observation or condition.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasExplanation
 */
export const ActRelationshipHasExplanationCode = {
  /**
   * has explanation
   */
  hasexplanation: "EXPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasExplanationCode =
  typeof ActRelationshipHasExplanationCode[keyof typeof ActRelationshipHasExplanationCode];
