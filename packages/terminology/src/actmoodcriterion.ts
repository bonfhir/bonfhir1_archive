/**
 * A criterion or condition over actual and potential services that must apply for an associated service to be considered. Matches records any ActMoodCompletionTrack moods.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodCriterion
 */
export const ActMoodCriterionCode = {
  /**
   * criterion
   */
  criterion: "CRT",

  /**
   * event criterion
   */
  eventcriterion: "EVN.CRT",

  /**
   * goal criterion
   */
  goalcriterion: "GOL.CRT",

  /**
   * intent criterion
   */
  intentcriterion: "INT.CRT",

  /**
   * promise criterion
   */
  promisecriterion: "PRMS.CRT",

  /**
   * request criterion
   */
  requestcriterion: "RQO.CRT",

  /**
   * risk criterion
   */
  riskcriterion: "RSK.CRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodCriterionCode =
  typeof ActMoodCriterionCode[keyof typeof ActMoodCriterionCode];
