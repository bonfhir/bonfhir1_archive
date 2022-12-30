/**
 * The scoring type of the measure.
 * http://terminology.hl7.org/ValueSet/measure-scoring
 */
export const MeasureScoringCode = {
  /**
   * Proportion
   */
  proportion: "proportion",

  /**
   * Ratio
   */
  ratio: "ratio",

  /**
   * Continuous Variable
   */
  "continuous-variable": "continuous-variable",

  /**
   * Cohort
   */
  cohort: "cohort",

  /**
   * Composite
   */
  composite: "composite",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureScoringCode =
  typeof MeasureScoringCode[keyof typeof MeasureScoringCode];
