/**
 * Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA). The code can represent summaries by day, location, payee and other cost elements such as bonus, retroactive adjustment and transaction fees.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceAdjudicationPaymentCode
 */
export const ActInvoiceAdjudicationPaymentCodeCode = {
  /**
   * ActInvoiceAdjudicationPaymentGroupCode
   */
  ActInvoiceAdjudicationPaymentGroupCode:
    "_ActInvoiceAdjudicationPaymentGroupCode",

  /**
   * alternate electronic
   */
  alternateelectronic: "ALEC",

  /**
   * bonus
   */
  bonus: "BONUS",

  /**
   * carry forward adjusment
   */
  carryforwardadjusment: "CFWD",

  /**
   * education fees
   */
  educationfees: "EDU",

  /**
   * early payment fee
   */
  earlypaymentfee: "EPYMT",

  /**
   * garnishee
   */
  garnishee: "GARN",

  /**
   * submitted invoice
   */
  submittedinvoice: "INVOICE",

  /**
   * paper invoice
   */
  paperinvoice: "PINV",

  /**
   * prior period adjustment
   */
  priorperiodadjustment: "PPRD",

  /**
   * professional association deduction
   */
  professionalassociationdeduction: "PROA",

  /**
   * recovery
   */
  recovery: "RECOV",

  /**
   * retro adjustment
   */
  retroadjustment: "RETRO",

  /**
   * transaction fee
   */
  transactionfee: "TRAN",

  /**
   * ActInvoiceAdjudicationPaymentGroupCode
   */
  ActInvoiceAdjudicationPaymentGroupCode: "_ActInvoicePaymentCode",

  /**
   * ActInvoiceAdjudicationPaymentSummaryCode
   */
  ActInvoiceAdjudicationPaymentSummaryCode:
    "_ActInvoiceAdjudicationPaymentSummaryCode",

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
export type ActInvoiceAdjudicationPaymentCodeCode =
  typeof ActInvoiceAdjudicationPaymentCodeCode[keyof typeof ActInvoiceAdjudicationPaymentCodeCode];
