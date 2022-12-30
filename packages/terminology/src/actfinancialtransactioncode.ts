/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActFinancialTransactionCode
 */
export const ActFinancialTransactionCodeCode = {
  /**
   * Standard Charge
   */
  CHRG: "CHRG",

  /**
   * Standard Charge Reversal
   */
  REV: "REV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActFinancialTransactionCodeCode =
  typeof ActFinancialTransactionCodeCode[keyof typeof ActFinancialTransactionCodeCode];
