/**
 * Value Set of codes used to specify the method for the movement of payment.
 * http://terminology.hl7.org/ValueSet/v2-0570
 */
export const Hl7VSPaymentMethodCodeCode = {
  /**
   * Cash
   */
  Cash: "CASH",

  /**
   * Credit Card
   */
  CreditCard: "CCCA",

  /**
   * Cashier's Check
   */
  CashiersCheck: "CCHK",

  /**
   * Credit/Debit Account
   */
  CreditDebitAccount: "CDAC",

  /**
   * Check
   */
  Check: "CHCK",

  /**
   * Direct Deposit
   */
  DirectDeposit: "DDPO",

  /**
   * Debit Card
   */
  DebitCard: "DEBC",

  /**
   * Society for Worldwide Interbank Financial Telecommunications (S.W.I.F.T.)
   */
  SocietyforWorldwideInterbankFinancialTelecommunicationsSWIFT: "SWFT",

  /**
   * Traveler's Check
   */
  TravelersCheck: "TRAC",

  /**
   * VISA Special Electronic Funds Transfer Network
   */
  VISASpecialElectronicFundsTransferNetwork: "VISN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPaymentMethodCodeCode =
  typeof Hl7VSPaymentMethodCodeCode[keyof typeof Hl7VSPaymentMethodCodeCode];
