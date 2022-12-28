/**
 * A branch is executed if its associated preconditions permit. If associated preconditions do not permit, the branch is dropped. Inclusive branches are not suppressed and do not suppress other branches.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSplitInclusiveTryOnce
 */
export const ActRelationshipSplitInclusiveTryOnceCode = {
  /**
   * inclusive try once
   */
  I1: "I1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSplitInclusiveTryOnceCode =
  typeof ActRelationshipSplitInclusiveTryOnceCode[keyof typeof ActRelationshipSplitInclusiveTryOnceCode];
