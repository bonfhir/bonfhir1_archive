/**
 * The type of study a statistic was derived from.
 * http://terminology.hl7.org/ValueSet/study-type
 */
export const StatisticStudyTypeCode = {
  /**
   * randomized trial
   */
  RCT: "RCT",

  /**
   * controlled trial (non-randomized)
   */
  CCT: "CCT",

  /**
   * comparative cohort study
   */
  cohort: "cohort",

  /**
   * case-control study
   */
  "case-control": "case-control",

  /**
   * uncontrolled case series
   */
  series: "series",

  /**
   * case report
   */
  "case-report": "case-report",

  /**
   * mixed RCT and cohort
   */
  RCTandCohort: "RCTandCohort",

  /**
   * cross sectional study
   */
  "cross-section": "cross-section",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticStudyTypeCode =
  typeof StatisticStudyTypeCode[keyof typeof StatisticStudyTypeCode];
