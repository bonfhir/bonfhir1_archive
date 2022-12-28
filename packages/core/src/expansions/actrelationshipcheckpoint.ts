/**
 * A code specifying when in the course of an Act a precondition for the Act is evaluated (e.g., before the Act starts for the first time, before every repetition, after each repetition but not before the first, or throughout the entire time of the Act.)

*Discussion:* This attribute is part of the workflow control suite of attributes. An action plan is a composite Act with component Acts. In a sequential plan, each component has a sequenceNumber that specifies the ordering of the plan steps. Before each step is executed and has preconditions these conditions are tested and if the test is positive, the Act has clearance for execution. The repeatNumber may indicate that an Act may be repeatedly executed. The checkpointCode is specifies when the precondition is checked and is analogous to the various conditional statements and loop constructs in programming languages "while-do" vs. "do-while" or "repeat-until" vs. "loop-exit".

For all checkpointCodes, except "end", preconditions are being checked at the time when the preceding step of the plan has terminated and this step would be next in the sequence established by the sequenceNumber attribute.

When the checkpointCode for a criterion of a repeatable Act is "end", the criterion is tested only at the end of each repetition of that Act. When the condition holds true, the next repetition is ready for execution.

When the checkpointCode is "entry" the criterion is checked at the beginning of each repetition (if any) whereas "beginning" means the criterion is checked only once before the repetition "loop" starts.

The checkpointCode "through" is special in that it requires the condition to hold throughout the execution of the Act, even throughout a single execution. As soon as the condition turns false, the Act should receive an interrupt event (see interruptibleInd) and will eventually terminate.

The checkpointCode "exit" is only used on a special plan step that represents a loop exit step. This allows an action plan to exit due to a condition tested inside the execution of this plan. Such exit criteria are sequenced with the other plan components using the ActRelationship.sequenceNumber.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCheckpoint
 */
export const ActRelationshipCheckpointCode = {
  /**
   * beginning
   */
  B: "B",

  /**
   * end
   */
  E: "E",

  /**
   * entry
   */
  S: "S",

  /**
   * through
   */
  T: "T",

  /**
   * exit
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCheckpointCode =
  typeof ActRelationshipCheckpointCode[keyof typeof ActRelationshipCheckpointCode];
