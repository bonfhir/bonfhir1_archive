/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActFinancialTransactionCode
 */
export const ActFinancialTransactionCodeCode = {
  /**
   * Standard Charge
   */
  StandardCharge: "CHRG",

  /**
   * Standard Charge Reversal
   */
  StandardChargeReversal: "REV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActFinancialTransactionCodeCode =
  typeof ActFinancialTransactionCodeCode[keyof typeof ActFinancialTransactionCodeCode];
