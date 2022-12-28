/**
 * Value Set of codes used to specify the method for the movement of payment.
 * http://terminology.hl7.org/ValueSet/v2-0570
 */
export const Hl7VSPaymentMethodCodeCode = {
  /**
   * Cash
   */
  CASH: "CASH",

  /**
   * Credit Card
   */
  CCCA: "CCCA",

  /**
   * Cashier's Check
   */
  CCHK: "CCHK",

  /**
   * Credit/Debit Account
   */
  CDAC: "CDAC",

  /**
   * Check
   */
  CHCK: "CHCK",

  /**
   * Direct Deposit
   */
  DDPO: "DDPO",

  /**
   * Debit Card
   */
  DEBC: "DEBC",

  /**
   * Society for Worldwide Interbank Financial Telecommunications (S.W.I.F.T.)
   */
  SWFT: "SWFT",

  /**
   * Traveler's Check
   */
  TRAC: "TRAC",

  /**
   * VISA Special Electronic Funds Transfer Network
   */
  VISN: "VISN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPaymentMethodCodeCode =
  typeof Hl7VSPaymentMethodCodeCode[keyof typeof Hl7VSPaymentMethodCodeCode];
