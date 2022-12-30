/**
 * Observation types for specifying criteria used to assert that a subject is included in a particular population.
 * http://terminology.hl7.org/ValueSet/v3-PopulationInclusionObservationType
 */
export const PopulationInclusionObservationTypeCode = {
  /**
   * PopulationInclusionObservationType
   */
  _PopulationInclusionObservationType: "_PopulationInclusionObservationType",

  /**
   * denominator exclusions
   */
  DENEX: "DENEX",

  /**
   * denominator exceptions
   */
  DENEXCEP: "DENEXCEP",

  /**
   * denominator
   */
  DENOM: "DENOM",

  /**
   * initial population
   */
  IPOP: "IPOP",

  /**
   * initial patient population
   */
  IPPOP: "IPPOP",

  /**
   * measure observation
   */
  MSROBS: "MSROBS",

  /**
   * measure population
   */
  MSRPOPL: "MSRPOPL",

  /**
   * measure population exclusions
   */
  MSRPOPLEX: "MSRPOPLEX",

  /**
   * numerator
   */
  NUMER: "NUMER",

  /**
   * numerator exclusions
   */
  NUMEX: "NUMEX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PopulationInclusionObservationTypeCode =
  typeof PopulationInclusionObservationTypeCode[keyof typeof PopulationInclusionObservationTypeCode];
