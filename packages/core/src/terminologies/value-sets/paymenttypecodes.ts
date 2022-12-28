/**
 * This value set includes sample Payment Type codes.
 * http://hl7.org/fhir/ValueSet/payment-type
 */
export const PaymentTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PaymentTypeCodesCode =
  typeof PaymentTypeCodesCode[keyof typeof PaymentTypeCodesCode];
