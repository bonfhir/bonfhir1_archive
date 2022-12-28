/**
 * A criterion or condition over service events that must apply for an associated service to be considered.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodEventCriterion
 */
export const ActMoodEventCriterionCode = {
  /**
   * event criterion
   */
  "EVN.CRT": "EVN.CRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodEventCriterionCode =
  typeof ActMoodEventCriterionCode[keyof typeof ActMoodEventCriterionCode];
