/**
 * Observation types for specifying criteria used to assert that a subject is included in a particular population.
 * http://terminology.hl7.org/ValueSet/v3-PopulationInclusionObservationType
 */
export const PopulationInclusionObservationTypeCode = {
  /**
   * PopulationInclusionObservationType
   */
  PopulationInclusionObservationType: "_PopulationInclusionObservationType",

  /**
   * denominator exclusions
   */
  denominatorexclusions: "DENEX",

  /**
   * denominator exceptions
   */
  denominatorexceptions: "DENEXCEP",

  /**
   * denominator
   */
  denominator: "DENOM",

  /**
   * initial population
   */
  initialpopulation: "IPOP",

  /**
   * initial patient population
   */
  initialpatientpopulation: "IPPOP",

  /**
   * measure observation
   */
  measureobservation: "MSROBS",

  /**
   * measure population
   */
  measurepopulation: "MSRPOPL",

  /**
   * measure population exclusions
   */
  measurepopulationexclusions: "MSRPOPLEX",

  /**
   * numerator
   */
  numerator: "NUMER",

  /**
   * numerator exclusions
   */
  numeratorexclusions: "NUMEX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PopulationInclusionObservationTypeCode =
  typeof PopulationInclusionObservationTypeCode[keyof typeof PopulationInclusionObservationTypeCode];
