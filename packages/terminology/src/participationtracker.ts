/**
 * A secondary information recipient, who receives copies (e.g., a primary care provider receiving copies of results as ordered by specialist).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationTracker
 */
export const ParticipationTrackerCode = {
  /**
   * tracker
   */
  tracker: "TRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationTrackerCode =
  typeof ParticipationTrackerCode[keyof typeof ParticipationTrackerCode];
