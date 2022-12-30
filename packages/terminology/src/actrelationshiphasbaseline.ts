/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasBaseline
 */
export const ActRelationshipHasBaselineCode = {
  /**
   * has baseline
   */
  BSLN: "BSLN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasBaselineCode =
  typeof ActRelationshipHasBaselineCode[keyof typeof ActRelationshipHasBaselineCode];
