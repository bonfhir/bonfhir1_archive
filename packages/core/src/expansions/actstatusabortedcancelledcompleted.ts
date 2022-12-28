/**
 * **Description:** The status of an assessment for indications of an abnormal condition.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusAbortedCancelledCompleted
 */
export const ActStatusAbortedCancelledCompletedCode = {
  /**
   * aborted
   */
  aborted: "aborted",

  /**
   * cancelled
   */
  cancelled: "cancelled",

  /**
   * completed
   */
  completed: "completed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusAbortedCancelledCompletedCode =
  typeof ActStatusAbortedCancelledCompletedCode[keyof typeof ActStatusAbortedCancelledCompletedCode];
