/**
 * Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results.
 * http://terminology.hl7.org/ValueSet/v3-ActAdjudicationCode
 */
export const ActAdjudicationCodeCode = {
  /**
   * ActAdjudicationGroupCode
   */
  _ActAdjudicationGroupCode: "_ActAdjudicationGroupCode",

  /**
   * contract
   */
  CONT: "CONT",

  /**
   * day
   */
  DAY: "DAY",

  /**
   * location
   */
  LOC: "LOC",

  /**
   * month
   */
  MONTH: "MONTH",

  /**
   * period
   */
  PERIOD: "PERIOD",

  /**
   * provider
   */
  PROV: "PROV",

  /**
   * week
   */
  WEEK: "WEEK",

  /**
   * year
   */
  YEAR: "YEAR",

  /**
   * adjudicated with adjustments
   */
  AA: "AA",

  /**
   * adjudicated with adjustments and no financial impact
   */
  ANF: "ANF",

  /**
   * adjudicated as refused
   */
  AR: "AR",

  /**
   * adjudicated as submitted
   */
  AS: "AS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdjudicationCodeCode =
  typeof ActAdjudicationCodeCode[keyof typeof ActAdjudicationCodeCode];
