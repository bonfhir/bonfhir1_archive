/**
 * A branch is selected as soon as the pre-condition associated with the branch evaluates to true. If the condition is false, the branch may be entered later, when the condition turns true. All other exclusive branches compete with each other and only one will be selected. Each waiting branch executes in parallel with the default join code wait (see below). The order in which the branches are considered may be specified in the Service\_relationship.priority\_nmb.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSplitExclusiveWait
 */
export const ActRelationshipSplitExclusiveWaitCode = {
  /**
   * exclusive wait
   */
  EW: "EW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSplitExclusiveWaitCode =
  typeof ActRelationshipSplitExclusiveWaitCode[keyof typeof ActRelationshipSplitExclusiveWaitCode];
