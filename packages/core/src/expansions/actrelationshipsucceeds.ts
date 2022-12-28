/**
 * **Definition:** A new act that carries forward the intention of the original act, but does not completely replace it. The status of the predecessor act must be 'completed'. The original act is the target act and the successor is the source act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSucceeds
 */
export const ActRelationshipSucceedsCode = {
  /**
   * succeeds
   */
  SUCC: "SUCC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSucceedsCode =
  typeof ActRelationshipSucceedsCode[keyof typeof ActRelationshipSucceedsCode];
