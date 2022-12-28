/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActInvoicePaymentCode
 */
export const ActInvoicePaymentCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoicePaymentCodeCode =
  typeof ActInvoicePaymentCodeCode[keyof typeof ActInvoicePaymentCodeCode];
