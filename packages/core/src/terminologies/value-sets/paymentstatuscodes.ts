/**
 * This value set includes a sample set of Payment Status codes.
 * http://hl7.org/fhir/ValueSet/payment-status
 */
export const PaymentStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PaymentStatusCodesCode =
  typeof PaymentStatusCodesCode[keyof typeof PaymentStatusCodesCode];
