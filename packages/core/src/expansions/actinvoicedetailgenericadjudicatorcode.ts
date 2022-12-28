/**
 * The billable item codes to identify adjudicator specified components to the total billing of a claim.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailGenericAdjudicatorCode
 */
export const ActInvoiceDetailGenericAdjudicatorCodeCode = {
  /**
   * coinsurance
   */
  COIN: "COIN",

  /**
   * patient co-pay
   */
  COPAYMENT: "COPAYMENT",

  /**
   * deductible
   */
  DEDUCTIBLE: "DEDUCTIBLE",

  /**
   * payment
   */
  PAY: "PAY",

  /**
   * spend down
   */
  SPEND: "SPEND",

  /**
   * co-insurance
   */
  COINS: "COINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailGenericAdjudicatorCodeCode =
  typeof ActInvoiceDetailGenericAdjudicatorCodeCode[keyof typeof ActInvoiceDetailGenericAdjudicatorCodeCode];
