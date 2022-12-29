/**
 * Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA). The code can represent summaries by day, location, payee, etc.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceAdjudicationPaymentSummaryCode
 */
export const ActInvoiceAdjudicationPaymentSummaryCodeCode = {
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
   * invoice type
   */
  invoicetype: "INVTYPE",

  /**
   * payee
   */
  payee: "PAYEE",

  /**
   * payor
   */
  payor: "PAYOR",

  /**
   * sending application
   */
  sendingapplication: "SENDAPP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceAdjudicationPaymentSummaryCodeCode =
  typeof ActInvoiceAdjudicationPaymentSummaryCodeCode[keyof typeof ActInvoiceAdjudicationPaymentSummaryCodeCode];
