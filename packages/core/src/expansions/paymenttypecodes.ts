/**
 * This value set includes sample Payment Type codes.
 * http://terminology.hl7.org/ValueSet/payment-type
 */
export const PaymentTypeCodesCode = {
  /**
   * Payment
   */
  payment: "payment",

  /**
   * Adjustment
   */
  adjustment: "adjustment",

  /**
   * Advance
   */
  advance: "advance",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PaymentTypeCodesCode =
  typeof PaymentTypeCodesCode[keyof typeof PaymentTypeCodesCode];
