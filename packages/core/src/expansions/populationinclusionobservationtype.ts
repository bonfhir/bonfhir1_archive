/**
 * Observation types for specifying criteria used to assert that a subject is included in a particular population.
 * http://terminology.hl7.org/ValueSet/v3-PopulationInclusionObservationType
 */
export const PopulationInclusionObservationTypeCode = {
  /**
   * PopulationInclusionObservationType
   */
  _PopulationInclusionObservationType: "_PopulationInclusionObservationType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PopulationInclusionObservationTypeCode =
  typeof PopulationInclusionObservationTypeCode[keyof typeof PopulationInclusionObservationTypeCode];
