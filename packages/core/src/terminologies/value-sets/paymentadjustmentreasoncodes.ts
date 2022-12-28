/**
 * This value set includes smattering of Payment Adjustment Reason codes.
 * http://hl7.org/fhir/ValueSet/payment-adjustment-reason
 */
export const PaymentAdjustmentReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PaymentAdjustmentReasonCodesCode =
  typeof PaymentAdjustmentReasonCodesCode[keyof typeof PaymentAdjustmentReasonCodesCode];
