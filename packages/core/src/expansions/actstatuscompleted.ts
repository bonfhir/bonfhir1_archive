/**
 * An Act that has terminated normally after all of its constituents have been performed.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusCompleted
 */
export const ActStatusCompletedCode = {
  /**
   * completed
   */
  completed: "completed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusCompletedCode =
  typeof ActStatusCompletedCode[keyof typeof ActStatusCompletedCode];
