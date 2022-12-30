/**
 * Code identifying the method or the movement of payment instructions.

Codes are drawn from X12 data element 591 (PaymentMethodCode)
 * http://terminology.hl7.org/ValueSet/v3-ActPaymentCode
 */
export const ActPaymentCodeCode = {
  /**
   * Automated Clearing House
   */
  ACH: "ACH",

  /**
   * Cheque
   */
  CHK: "CHK",

  /**
   * Direct Deposit
   */
  DDP: "DDP",

  /**
   * Non-Payment Data
   */
  NON: "NON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPaymentCodeCode =
  typeof ActPaymentCodeCode[keyof typeof ActPaymentCodeCode];
