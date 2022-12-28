/**
 * A criterion or condition over actual and potential services that must apply for an associated service to be considered. Matches records any ActMoodCompletionTrack moods.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodCriterion
 */
export const ActMoodCriterionCode = {
  /**
   * criterion
   */
  CRT: "CRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodCriterionCode =
  typeof ActMoodCriterionCode[keyof typeof ActMoodCriterionCode];
