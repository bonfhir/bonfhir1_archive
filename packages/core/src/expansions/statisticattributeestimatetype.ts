/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 * http://terminology.hl7.org/ValueSet/attribute-estimate-type
 */
export const StatisticAttributeEstimateTypeCode = {
  /**
   * Cochran's Q statistic
   */
  "0000419": "0000419",

  /**
   * Confidence interval
   */
  C53324: "C53324",

  /**
   * Credible interval
   */
  "0000455": "0000455",

  /**
   * I-squared
   */
  "0000420": "0000420",

  /**
   * Interquartile range
   */
  C53245: "C53245",

  /**
   * P-value
   */
  C44185: "C44185",

  /**
   * Range
   */
  C38013: "C38013",

  /**
   * Standard deviation
   */
  C53322: "C53322",

  /**
   * Standard error of the mean
   */
  "0000037": "0000037",

  /**
   * Tau squared
   */
  "0000421": "0000421",

  /**
   * Variance
   */
  C48918: "C48918",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticAttributeEstimateTypeCode =
  typeof StatisticAttributeEstimateTypeCode[keyof typeof StatisticAttributeEstimateTypeCode];
