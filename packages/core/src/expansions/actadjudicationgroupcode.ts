/**
 * Catagorization of grouping criteria for the associated transactions and/or summary (totals, subtotals).
 * http://terminology.hl7.org/ValueSet/v3-ActAdjudicationGroupCode
 */
export const ActAdjudicationGroupCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdjudicationGroupCodeCode =
  typeof ActAdjudicationGroupCodeCode[keyof typeof ActAdjudicationGroupCodeCode];
