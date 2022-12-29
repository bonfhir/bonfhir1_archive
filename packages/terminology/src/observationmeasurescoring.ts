/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationMeasureScoring
 */
export const ObservationMeasureScoringCode = {
  /**
   * ObservationMeasureScoring
   */
  ObservationMeasureScoring: "_ObservationMeasureScoring",

  /**
   * cohort measure scoring
   */
  cohortmeasurescoring: "COHORT",

  /**
   * continuous variable measure scoring
   */
  continuousvariablemeasurescoring: "CONTVAR",

  /**
   * proportion measure scoring
   */
  proportionmeasurescoring: "PROPOR",

  /**
   * ratio measure scoring
   */
  ratiomeasurescoring: "RATIO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMeasureScoringCode =
  typeof ObservationMeasureScoringCode[keyof typeof ObservationMeasureScoringCode];
