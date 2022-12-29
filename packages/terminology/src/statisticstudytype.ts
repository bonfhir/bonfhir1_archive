/**
 * The type of study a statistic was derived from.
 * http://terminology.hl7.org/ValueSet/study-type
 */
export const StatisticStudyTypeCode = {
  /**
   * randomized trial
   */
  randomizedtrial: "RCT",

  /**
   * controlled trial (non-randomized)
   */
  controlledtrialnonrandomized: "CCT",

  /**
   * comparative cohort study
   */
  comparativecohortstudy: "cohort",

  /**
   * case-control study
   */
  casecontrolstudy: "case-control",

  /**
   * uncontrolled case series
   */
  uncontrolledcaseseries: "series",

  /**
   * case report
   */
  casereport: "case-report",

  /**
   * mixed RCT and cohort
   */
  mixedRCTandcohort: "RCTandCohort",

  /**
   * cross sectional study
   */
  crosssectionalstudy: "cross-section",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticStudyTypeCode =
  typeof StatisticStudyTypeCode[keyof typeof StatisticStudyTypeCode];
