/**
 * Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results.
 * http://terminology.hl7.org/ValueSet/v3-ActAdjudicationCode
 */
export const ActAdjudicationCodeCode = {
  /**
   * ActAdjudicationGroupCode
   */
  ActAdjudicationGroupCode: "_ActAdjudicationGroupCode",

  /**
   * contract
   */
  contract: "CONT",

  /**
   * day
   */
  day: "DAY",

  /**
   * location
   */
  location: "LOC",

  /**
   * month
   */
  month: "MONTH",

  /**
   * period
   */
  period: "PERIOD",

  /**
   * provider
   */
  provider: "PROV",

  /**
   * week
   */
  week: "WEEK",

  /**
   * year
   */
  year: "YEAR",

  /**
   * adjudicated with adjustments
   */
  adjudicatedwithadjustments: "AA",

  /**
   * adjudicated with adjustments and no financial impact
   */
  adjudicatedwithadjustmentsandnofinancialimpact: "ANF",

  /**
   * adjudicated as refused
   */
  adjudicatedasrefused: "AR",

  /**
   * adjudicated as submitted
   */
  adjudicatedassubmitted: "AS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdjudicationCodeCode =
  typeof ActAdjudicationCodeCode[keyof typeof ActAdjudicationCodeCode];
