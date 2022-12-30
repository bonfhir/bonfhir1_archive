/**
 * This value set includes a sample set of Payment Status codes.
 * http://terminology.hl7.org/ValueSet/payment-status
 */
export const PaymentStatusCodesCode = {
  /**
   * Paid
   */
  paid: "paid",

  /**
   * Cleared
   */
  cleared: "cleared",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PaymentStatusCodesCode =
  typeof PaymentStatusCodesCode[keyof typeof PaymentStatusCodesCode];
