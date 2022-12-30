/**
 * The target participation for an individual in a health care coverage act in which the target role is either the policy holder of the coverage, or a covered party under the coverage.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationCoverageTarget
 */
export const ParticipationCoverageTargetCode = {
  /**
   * coverage target
   */
  COV: "COV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationCoverageTargetCode =
  typeof ParticipationCoverageTargetCode[keyof typeof ParticipationCoverageTargetCode];
