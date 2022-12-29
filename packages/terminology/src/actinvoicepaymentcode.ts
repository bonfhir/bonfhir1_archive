/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActInvoicePaymentCode
 */
export const ActInvoicePaymentCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoicePaymentCodeCode =
  typeof ActInvoicePaymentCodeCode[keyof typeof ActInvoicePaymentCodeCode];
