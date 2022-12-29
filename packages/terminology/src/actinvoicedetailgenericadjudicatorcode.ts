/**
 * The billable item codes to identify adjudicator specified components to the total billing of a claim.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailGenericAdjudicatorCode
 */
export const ActInvoiceDetailGenericAdjudicatorCodeCode = {
  /**
   * coinsurance
   */
  coinsurance: "COIN",

  /**
   * patient co-pay
   */
  patientcopay: "COPAYMENT",

  /**
   * deductible
   */
  deductible: "DEDUCTIBLE",

  /**
   * payment
   */
  payment: "PAY",

  /**
   * spend down
   */
  spenddown: "SPEND",

  /**
   * co-insurance
   */
  coinsurance: "COINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailGenericAdjudicatorCodeCode =
  typeof ActInvoiceDetailGenericAdjudicatorCodeCode[keyof typeof ActInvoiceDetailGenericAdjudicatorCodeCode];
