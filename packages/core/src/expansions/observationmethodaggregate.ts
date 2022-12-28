/**
 * A set of codes that defines how a set of values are summarized in an aggregated computation, for use with sets of values do describe which aggregated statistic functions are to be applied (e.g., average, mode, min, max, standard deviation, variance).
 * http://terminology.hl7.org/ValueSet/v3-ObservationMethodAggregate
 */
export const ObservationMethodAggregateCode = {
  /**
   * observation method aggregate
   */
  _ObservationMethodAggregate: "_ObservationMethodAggregate",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMethodAggregateCode =
  typeof ObservationMethodAggregateCode[keyof typeof ObservationMethodAggregateCode];
