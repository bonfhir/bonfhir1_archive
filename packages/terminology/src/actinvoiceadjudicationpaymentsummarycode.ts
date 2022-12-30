/**
 * Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA). The code can represent summaries by day, location, payee, etc.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceAdjudicationPaymentSummaryCode
 */
export const ActInvoiceAdjudicationPaymentSummaryCodeCode = {
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
   * invoice type
   */
  INVTYPE: "INVTYPE",

  /**
   * payee
   */
  PAYEE: "PAYEE",

  /**
   * payor
   */
  PAYOR: "PAYOR",

  /**
   * sending application
   */
  SENDAPP: "SENDAPP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceAdjudicationPaymentSummaryCodeCode =
  typeof ActInvoiceAdjudicationPaymentSummaryCodeCode[keyof typeof ActInvoiceAdjudicationPaymentSummaryCodeCode];
