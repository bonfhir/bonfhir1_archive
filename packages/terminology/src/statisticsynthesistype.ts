/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 * http://terminology.hl7.org/ValueSet/synthesis-type
 */
export const StatisticSynthesisTypeCode = {
  /**
   * summary data meta-analysis
   */
  summarydatametaanalysis: "std-MA",

  /**
   * individual patient data meta-analysis
   */
  individualpatientdatametaanalysis: "IPD-MA",

  /**
   * indirect network meta-analysis
   */
  indirectnetworkmetaanalysis: "indirect-NMA",

  /**
   * combined direct plus indirect network meta-analysis
   */
  combineddirectplusindirectnetworkmetaanalysis: "combined-NMA",

  /**
   * range of results
   */
  rangeofresults: "range",

  /**
   * classifcation of results
   */
  classifcationofresults: "classification",

  /**
   * pooled rates
   */
  pooledrates: "pooled",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticSynthesisTypeCode =
  typeof StatisticSynthesisTypeCode[keyof typeof StatisticSynthesisTypeCode];
