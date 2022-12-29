/**
 * The pre-condition associated with the branch is evaluated once and if true the branch may be entered. All other exclusive branches compete with each other and only one will be selected. This implements a COND, IF and CASE conditionals, or "XOR-split." The order in which the branches are considered may be specified in the priorityNumber attribute.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSplitExclusiveTryOnce
 */
export const ActRelationshipSplitExclusiveTryOnceCode = {
  /**
   * exclusive try once
   */
  exclusivetryonce: "E1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSplitExclusiveTryOnceCode =
  typeof ActRelationshipSplitExclusiveTryOnceCode[keyof typeof ActRelationshipSplitExclusiveTryOnceCode];
