/**
 * A branch is executed as soon as its associated conditions permit. If the condition is false, the branch may be entered later, when the condition turns true. Inclusive branches are not suppressed and do not suppress other branches. Each waiting branch executes in parallel with the default join code wait (see below).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSplitInclusiveWait
 */
export const ActRelationshipSplitInclusiveWaitCode = {
  /**
   * inclusive wait
   */
  inclusivewait: "IW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSplitInclusiveWaitCode =
  typeof ActRelationshipSplitInclusiveWaitCode[keyof typeof ActRelationshipSplitInclusiveWaitCode];
