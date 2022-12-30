/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationMeasureScoring
 */
export const ObservationMeasureScoringCode = {
  /**
   * ObservationMeasureScoring
   */
  _ObservationMeasureScoring: "_ObservationMeasureScoring",

  /**
   * cohort measure scoring
   */
  COHORT: "COHORT",

  /**
   * continuous variable measure scoring
   */
  CONTVAR: "CONTVAR",

  /**
   * proportion measure scoring
   */
  PROPOR: "PROPOR",

  /**
   * ratio measure scoring
   */
  RATIO: "RATIO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMeasureScoringCode =
  typeof ObservationMeasureScoringCode[keyof typeof ObservationMeasureScoringCode];
