/**
 * The scoring type of the measure.
 * http://terminology.hl7.org/ValueSet/measure-scoring
 */
export const MeasureScoringCode = {
  /**
   * Proportion
   */
  Proportion: "proportion",

  /**
   * Ratio
   */
  Ratio: "ratio",

  /**
   * Continuous Variable
   */
  ContinuousVariable: "continuous-variable",

  /**
   * Cohort
   */
  Cohort: "cohort",

  /**
   * Composite
   */
  Composite: "composite",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureScoringCode =
  typeof MeasureScoringCode[keyof typeof MeasureScoringCode];
