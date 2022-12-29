/**
 * When all other concurrent branches are terminated, interrupt and discontinue this branch.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipJoinKill
 */
export const ActRelationshipJoinKillCode = {
  /**
   * kill
   */
  kill: "K",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipJoinKillCode =
  typeof ActRelationshipJoinKillCode[keyof typeof ActRelationshipJoinKillCode];
