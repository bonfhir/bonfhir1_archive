/**
 * **Description:**These are moods describing activities as they progress in the business cycle, from defined, through planned and ordered to completed, and any applicable criterion or condition over actual and potential services that must apply for an associated service to be considered.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodCompletionCriterion
 */
export const XActMoodCompletionCriterionCode = {
  /**
   * criterion
   */
  CRT: "CRT",

  /**
   * definition
   */
  DEF: "DEF",

  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * event criterion
   */
  "EVN.CRT": "EVN.CRT",

  /**
   * intent
   */
  INT: "INT",

  /**
   * request
   */
  RQO: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodCompletionCriterionCode =
  typeof XActMoodCompletionCriterionCode[keyof typeof XActMoodCompletionCriterionCode];
