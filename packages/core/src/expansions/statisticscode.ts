/**
 * The statistical operation parameter -"statistic" codes.
 * http://terminology.hl7.org/ValueSet/observation-statistics
 */
export const StatisticsCodeCode = {
  /**
   * Average
   */
  average: "average",

  /**
   * Maximum
   */
  maximum: "maximum",

  /**
   * Minimum
   */
  minimum: "minimum",

  /**
   * Count
   */
  count: "count",

  /**
   * Total Count
   */
  "total-count": "total-count",

  /**
   * Median
   */
  median: "median",

  /**
   * Standard Deviation
   */
  "std-dev": "std-dev",

  /**
   * Sum
   */
  sum: "sum",

  /**
   * Variance
   */
  variance: "variance",

  /**
   * 20th Percentile
   */
  "20-percent": "20-percent",

  /**
   * 80th Percentile
   */
  "80-percent": "80-percent",

  /**
   * Lower Quartile
   */
  "4-lower": "4-lower",

  /**
   * Upper Quartile
   */
  "4-upper": "4-upper",

  /**
   * Quartile Deviation
   */
  "4-dev": "4-dev",

  /**
   * 1st Quintile
   */
  "5-1": "5-1",

  /**
   * 2nd Quintile
   */
  "5-2": "5-2",

  /**
   * 3rd Quintile
   */
  "5-3": "5-3",

  /**
   * 4th Quintile
   */
  "5-4": "5-4",

  /**
   * Skew
   */
  skew: "skew",

  /**
   * Kurtosis
   */
  kurtosis: "kurtosis",

  /**
   * Regression
   */
  regression: "regression",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticsCodeCode =
  typeof StatisticsCodeCode[keyof typeof StatisticsCodeCode];
