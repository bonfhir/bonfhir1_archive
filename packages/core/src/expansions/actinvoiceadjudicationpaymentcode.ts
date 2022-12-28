/**
 * Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA). The code can represent summaries by day, location, payee and other cost elements such as bonus, retroactive adjustment and transaction fees.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceAdjudicationPaymentCode
 */
export const ActInvoiceAdjudicationPaymentCodeCode = {
  /**
   * ActInvoiceAdjudicationPaymentGroupCode
   */
  _ActInvoiceAdjudicationPaymentGroupCode:
    "_ActInvoiceAdjudicationPaymentGroupCode",

  /**
   * alternate electronic
   */
  ALEC: "ALEC",

  /**
   * bonus
   */
  BONUS: "BONUS",

  /**
   * carry forward adjusment
   */
  CFWD: "CFWD",

  /**
   * education fees
   */
  EDU: "EDU",

  /**
   * early payment fee
   */
  EPYMT: "EPYMT",

  /**
   * garnishee
   */
  GARN: "GARN",

  /**
   * submitted invoice
   */
  INVOICE: "INVOICE",

  /**
   * paper invoice
   */
  PINV: "PINV",

  /**
   * prior period adjustment
   */
  PPRD: "PPRD",

  /**
   * professional association deduction
   */
  PROA: "PROA",

  /**
   * recovery
   */
  RECOV: "RECOV",

  /**
   * retro adjustment
   */
  RETRO: "RETRO",

  /**
   * transaction fee
   */
  TRAN: "TRAN",

  /**
   * ActInvoiceAdjudicationPaymentGroupCode
   */
  _ActInvoicePaymentCode: "_ActInvoicePaymentCode",

  /**
   * ActInvoiceAdjudicationPaymentSummaryCode
   */
  _ActInvoiceAdjudicationPaymentSummaryCode:
    "_ActInvoiceAdjudicationPaymentSummaryCode",

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
export type ActInvoiceAdjudicationPaymentCodeCode =
  typeof ActInvoiceAdjudicationPaymentCodeCode[keyof typeof ActInvoiceAdjudicationPaymentCodeCode];
