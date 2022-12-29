/**
 * Wait for this branch to terminate.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipJoinWait
 */
export const ActRelationshipJoinWaitCode = {
  /**
   * wait
   */
  wait: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipJoinWaitCode =
  typeof ActRelationshipJoinWaitCode[keyof typeof ActRelationshipJoinWaitCode];
