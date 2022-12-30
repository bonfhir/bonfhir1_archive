/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 * http://terminology.hl7.org/ValueSet/synthesis-type
 */
export const StatisticSynthesisTypeCode = {
  /**
   * summary data meta-analysis
   */
  "std-MA": "std-MA",

  /**
   * individual patient data meta-analysis
   */
  "IPD-MA": "IPD-MA",

  /**
   * indirect network meta-analysis
   */
  "indirect-NMA": "indirect-NMA",

  /**
   * combined direct plus indirect network meta-analysis
   */
  "combined-NMA": "combined-NMA",

  /**
   * range of results
   */
  range: "range",

  /**
   * classifcation of results
   */
  classification: "classification",

  /**
   * pooled rates
   */
  pooled: "pooled",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticSynthesisTypeCode =
  typeof StatisticSynthesisTypeCode[keyof typeof StatisticSynthesisTypeCode];
