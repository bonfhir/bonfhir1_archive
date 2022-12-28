/**
 * A code specifying how concurrent Acts are resynchronized in a parallel branch construct.

*Discussion:* This attribute is part of the workflow control suite of attributes. An action plan is a composite Act with component Acts. In a sequential plan, each component has a sequenceNumber that specifies the ordering of the plan steps. Branches exist when multiple components have the same sequenceNumber. Branches are parallel if the splitCode specifies that more than one branch can be executed at the same time. The joinCode then specifies if and how the braches are resynchronized.

The principal re-synchronization actions are (1) the control flow waits for a branch to terminate (wait-branch), (2) the branch that is not yet terminated is aborted (kill-branch), (3) the branch is not re-synchronized at all and continues in parallel (detached branch).

A kill branch is only executed if there is at least one active wait (or exclusive wait) branch. If there is no other wait branch active, a kill branch is not started at all (rather than being aborted shortly after it is started.) Since a detached branch is unrelated to all other branches, active detached branches do not protect a kill-branch from being aborted.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipJoin
 */
export const ActRelationshipJoinCode = {
  /**
   * detached
   */
  D: "D",

  /**
   * kill
   */
  K: "K",

  /**
   * wait
   */
  W: "W",

  /**
   * exclusive wait
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipJoinCode =
  typeof ActRelationshipJoinCode[keyof typeof ActRelationshipJoinCode];
