/**
 * Catagorization of grouping criteria for the associated transactions and/or summary (totals, subtotals).
 * http://terminology.hl7.org/ValueSet/v3-ActAdjudicationGroupCode
 */
export const ActAdjudicationGroupCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdjudicationGroupCodeCode =
  typeof ActAdjudicationGroupCodeCode[keyof typeof ActAdjudicationGroupCodeCode];
