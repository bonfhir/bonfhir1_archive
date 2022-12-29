/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 * http://terminology.hl7.org/ValueSet/attribute-estimate-type
 */
export const StatisticAttributeEstimateTypeCode = {
  /**
   * Cochran's Q statistic
   */
  CochransQstatistic: "0000419",

  /**
   * Confidence interval
   */
  Confidenceinterval: "C53324",

  /**
   * Credible interval
   */
  Credibleinterval: "0000455",

  /**
   * I-squared
   */
  Isquared: "0000420",

  /**
   * Interquartile range
   */
  Interquartilerange: "C53245",

  /**
   * P-value
   */
  Pvalue: "C44185",

  /**
   * Range
   */
  Range: "C38013",

  /**
   * Standard deviation
   */
  Standarddeviation: "C53322",

  /**
   * Standard error of the mean
   */
  Standarderrorofthemean: "0000037",

  /**
   * Tau squared
   */
  Tausquared: "0000421",

  /**
   * Variance
   */
  Variance: "C48918",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticAttributeEstimateTypeCode =
  typeof StatisticAttributeEstimateTypeCode[keyof typeof StatisticAttributeEstimateTypeCode];
