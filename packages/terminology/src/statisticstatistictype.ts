/**
 * The type of a specific statistic.
 * http://terminology.hl7.org/ValueSet/statistic-type
 */
export const StatisticStatisticTypeCode = {
  /**
   * Absolute Median Difference
   */
  AbsoluteMedianDifference: "absolute-MedianDiff",

  /**
   * Count
   */
  Count: "C25463",

  /**
   * Covariance
   */
  Covariance: "0000301",

  /**
   * Predicted Risk
   */
  PredictedRisk: "predictedRisk",

  /**
   * Descriptive
   */
  Descriptive: "descriptive",

  /**
   * Hazard Ratio
   */
  HazardRatio: "C93150",

  /**
   * Incidence
   */
  Incidence: "C16726",

  /**
   * Incidence Rate Ratio
   */
  IncidenceRateRatio: "rate-ratio",

  /**
   * Maximum
   */
  Maximum: "C25564",

  /**
   * Mean
   */
  Mean: "C53319",

  /**
   * Mean Difference
   */
  MeanDifference: "0000457",

  /**
   * Median
   */
  Median: "C28007",

  /**
   * Minimum
   */
  Minimum: "C25570",

  /**
   * Odds Ratio
   */
  OddsRatio: "C16932",

  /**
   * Pearson Correlation Coefficient
   */
  PearsonCorrelationCoefficient: "C65172",

  /**
   * Prevalence
   */
  Prevalence: "C17010",

  /**
   * Proportion
   */
  Proportion: "C44256",

  /**
   * Regression Coefficient
   */
  RegressionCoefficient: "0000565",

  /**
   * Relative Risk
   */
  RelativeRisk: "C93152",

  /**
   * Risk Difference
   */
  RiskDifference: "0000424",

  /**
   * Spearman Rank-Order Correlation
   */
  SpearmanRankOrderCorrelation: "C65171",

  /**
   * Standardized Mean Difference
   */
  StandardizedMeanDifference: "0000100",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticStatisticTypeCode =
  typeof StatisticStatisticTypeCode[keyof typeof StatisticStatisticTypeCode];
