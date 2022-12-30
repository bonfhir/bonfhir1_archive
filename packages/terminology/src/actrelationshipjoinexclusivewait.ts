/**
 * Wait for any one of the branches in the set of exclusive wait branches to terminate, then discontinue all the other exclusive wait branches.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipJoinExclusiveWait
 */
export const ActRelationshipJoinExclusiveWaitCode = {
  /**
   * exclusive wait
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipJoinExclusiveWaitCode =
  typeof ActRelationshipJoinExclusiveWaitCode[keyof typeof ActRelationshipJoinExclusiveWaitCode];
