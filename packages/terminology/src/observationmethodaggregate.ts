/**
 * A set of codes that defines how a set of values are summarized in an aggregated computation, for use with sets of values do describe which aggregated statistic functions are to be applied (e.g., average, mode, min, max, standard deviation, variance).
 * http://terminology.hl7.org/ValueSet/v3-ObservationMethodAggregate
 */
export const ObservationMethodAggregateCode = {
  /**
   * observation method aggregate
   */
  _ObservationMethodAggregate: "_ObservationMethodAggregate",

  /**
   * average
   */
  AVERAGE: "AVERAGE",

  /**
   * count
   */
  COUNT: "COUNT",

  /**
   * maxima
   */
  MAX: "MAX",

  /**
   * median
   */
  MEDIAN: "MEDIAN",

  /**
   * minima
   */
  MIN: "MIN",

  /**
   * mode
   */
  MODE: "MODE",

  /**
   * population standard deviation
   */
  "STDEV.P": "STDEV.P",

  /**
   * sample standard deviation
   */
  "STDEV.S": "STDEV.S",

  /**
   * sum
   */
  SUM: "SUM",

  /**
   * population variance
   */
  "VARIANCE.P": "VARIANCE.P",

  /**
   * sample variance
   */
  "VARIANCE.S": "VARIANCE.S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMethodAggregateCode =
  typeof ObservationMethodAggregateCode[keyof typeof ObservationMethodAggregateCode];
