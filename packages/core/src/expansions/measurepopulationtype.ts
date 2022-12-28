/**
 * The type of population.
 * http://terminology.hl7.org/ValueSet/measure-population
 */
export const MeasurePopulationTypeCode = {
  /**
   * Initial Population
   */
  "initial-population": "initial-population",

  /**
   * Numerator
   */
  numerator: "numerator",

  /**
   * Numerator Exclusion
   */
  "numerator-exclusion": "numerator-exclusion",

  /**
   * Denominator
   */
  denominator: "denominator",

  /**
   * Denominator Exclusion
   */
  "denominator-exclusion": "denominator-exclusion",

  /**
   * Denominator Exception
   */
  "denominator-exception": "denominator-exception",

  /**
   * Measure Population
   */
  "measure-population": "measure-population",

  /**
   * Measure Population Exclusion
   */
  "measure-population-exclusion": "measure-population-exclusion",

  /**
   * Measure Observation
   */
  "measure-observation": "measure-observation",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasurePopulationTypeCode =
  typeof MeasurePopulationTypeCode[keyof typeof MeasurePopulationTypeCode];
