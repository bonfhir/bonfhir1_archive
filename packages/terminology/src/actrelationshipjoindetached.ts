/**
 * Detach this branch from the other branches so it will not be resynchronized with the other branches.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipJoinDetached
 */
export const ActRelationshipJoinDetachedCode = {
  /**
   * detached
   */
  detached: "D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipJoinDetachedCode =
  typeof ActRelationshipJoinDetachedCode[keyof typeof ActRelationshipJoinDetachedCode];
