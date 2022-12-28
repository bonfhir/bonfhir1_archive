/**
 * This value set includes example Payment Type codes.
 * http://hl7.org/fhir/ValueSet/ex-paymenttype
 */
export const ExamplePaymentTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExamplePaymentTypeCodesCode =
  typeof ExamplePaymentTypeCodesCode[keyof typeof ExamplePaymentTypeCodesCode];
