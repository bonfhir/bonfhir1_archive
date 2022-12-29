/**
 * The statistical operation parameter -"statistic" codes.
 * http://terminology.hl7.org/ValueSet/observation-statistics
 */
export const StatisticsCodeCode = {
  /**
   * Average
   */
  Average: "average",

  /**
   * Maximum
   */
  Maximum: "maximum",

  /**
   * Minimum
   */
  Minimum: "minimum",

  /**
   * Count
   */
  Count: "count",

  /**
   * Total Count
   */
  TotalCount: "total-count",

  /**
   * Median
   */
  Median: "median",

  /**
   * Standard Deviation
   */
  StandardDeviation: "std-dev",

  /**
   * Sum
   */
  Sum: "sum",

  /**
   * Variance
   */
  Variance: "variance",

  /**
   * 20th Percentile
   */
  TwentythPercentile: "20-percent",

  /**
   * 80th Percentile
   */
  EightythPercentile: "80-percent",

  /**
   * Lower Quartile
   */
  LowerQuartile: "4-lower",

  /**
   * Upper Quartile
   */
  UpperQuartile: "4-upper",

  /**
   * Quartile Deviation
   */
  QuartileDeviation: "4-dev",

  /**
   * 1st Quintile
   */
  OnestQuintile: "5-1",

  /**
   * 2nd Quintile
   */
  TwondQuintile: "5-2",

  /**
   * 3rd Quintile
   */
  ThreerdQuintile: "5-3",

  /**
   * 4th Quintile
   */
  FourthQuintile: "5-4",

  /**
   * Skew
   */
  Skew: "skew",

  /**
   * Kurtosis
   */
  Kurtosis: "kurtosis",

  /**
   * Regression
   */
  Regression: "regression",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticsCodeCode =
  typeof StatisticsCodeCode[keyof typeof StatisticsCodeCode];
