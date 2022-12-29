/**
 * This value set includes smattering of Payment Adjustment Reason codes.
 * http://terminology.hl7.org/ValueSet/payment-adjustment-reason
 */
export const PaymentAdjustmentReasonCodesCode = {
  /**
   * Prior Payment Reversal
   */
  PriorPaymentReversal: "a001",

  /**
   * Prior Overpayment
   */
  PriorOverpayment: "a002",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PaymentAdjustmentReasonCodesCode =
  typeof PaymentAdjustmentReasonCodesCode[keyof typeof PaymentAdjustmentReasonCodesCode];
