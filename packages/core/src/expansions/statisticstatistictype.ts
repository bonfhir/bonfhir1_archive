/**
 * The type of a specific statistic.
 * http://terminology.hl7.org/ValueSet/statistic-type
 */
export const StatisticStatisticTypeCode = {
  /**
   * Absolute Median Difference
   */
  "absolute-MedianDiff": "absolute-MedianDiff",

  /**
   * Count
   */
  C25463: "C25463",

  /**
   * Covariance
   */
  "0000301": "0000301",

  /**
   * Predicted Risk
   */
  predictedRisk: "predictedRisk",

  /**
   * Descriptive
   */
  descriptive: "descriptive",

  /**
   * Hazard Ratio
   */
  C93150: "C93150",

  /**
   * Incidence
   */
  C16726: "C16726",

  /**
   * Incidence Rate Ratio
   */
  "rate-ratio": "rate-ratio",

  /**
   * Maximum
   */
  C25564: "C25564",

  /**
   * Mean
   */
  C53319: "C53319",

  /**
   * Mean Difference
   */
  "0000457": "0000457",

  /**
   * Median
   */
  C28007: "C28007",

  /**
   * Minimum
   */
  C25570: "C25570",

  /**
   * Odds Ratio
   */
  C16932: "C16932",

  /**
   * Pearson Correlation Coefficient
   */
  C65172: "C65172",

  /**
   * Prevalence
   */
  C17010: "C17010",

  /**
   * Proportion
   */
  C44256: "C44256",

  /**
   * Regression Coefficient
   */
  "0000565": "0000565",

  /**
   * Relative Risk
   */
  C93152: "C93152",

  /**
   * Risk Difference
   */
  "0000424": "0000424",

  /**
   * Spearman Rank-Order Correlation
   */
  C65171: "C65171",

  /**
   * Standardized Mean Difference
   */
  "0000100": "0000100",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticStatisticTypeCode =
  typeof StatisticStatisticTypeCode[keyof typeof StatisticStatisticTypeCode];
