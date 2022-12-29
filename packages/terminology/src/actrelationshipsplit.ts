/**
 * A code specifying how branches in an action plan are selected among other branches.

*Discussion:* This attribute is part of the workflow control suite of attributes. An action plan is a composite Act with component Acts. In a sequential plan, each component has a sequenceNumber that specifies the ordering of the plan steps. Branches exist when multiple components have the same sequenceNumber. The splitCode specifies whether a branch is executed exclusively (case-switch) or inclusively, i.e., in parallel with other branches.

In addition to exlusive and inclusive split the splitCode specifies how the pre-condition (also known as "guard conditions" on the branch) are evaluated. A guard condition may be evaluated once when the branching step is entered and if the conditions do not hold at that time, the branch is abandoned. Conversely execution of a branch may wait until the guard condition turns true.

In exclusive wait branches, the first branch whose guard conditions turn true will be executed and all other branches abandoned. In inclusive wait branches some branches may already be executed while other branches still wait for their guard conditions to turn true.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSplit
 */
export const ActRelationshipSplitCode = {
  /**
   * exclusive try once
   */
  exclusivetryonce: "E1",

  /**
   * exclusive wait
   */
  exclusivewait: "EW",

  /**
   * inclusive try once
   */
  inclusivetryonce: "I1",

  /**
   * inclusive wait
   */
  inclusivewait: "IW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSplitCode =
  typeof ActRelationshipSplitCode[keyof typeof ActRelationshipSplitCode];
