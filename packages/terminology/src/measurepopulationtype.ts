/**
 * The type of population.
 * http://terminology.hl7.org/ValueSet/measure-population
 */
export const MeasurePopulationTypeCode = {
  /**
   * Initial Population
   */
  InitialPopulation: "initial-population",

  /**
   * Numerator
   */
  Numerator: "numerator",

  /**
   * Numerator Exclusion
   */
  NumeratorExclusion: "numerator-exclusion",

  /**
   * Denominator
   */
  Denominator: "denominator",

  /**
   * Denominator Exclusion
   */
  DenominatorExclusion: "denominator-exclusion",

  /**
   * Denominator Exception
   */
  DenominatorException: "denominator-exception",

  /**
   * Measure Population
   */
  MeasurePopulation: "measure-population",

  /**
   * Measure Population Exclusion
   */
  MeasurePopulationExclusion: "measure-population-exclusion",

  /**
   * Measure Observation
   */
  MeasureObservation: "measure-observation",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasurePopulationTypeCode =
  typeof MeasurePopulationTypeCode[keyof typeof MeasurePopulationTypeCode];
