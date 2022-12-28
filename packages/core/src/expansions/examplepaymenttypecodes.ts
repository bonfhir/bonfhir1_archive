/**
 * This value set includes example Payment Type codes.
 * http://terminology.hl7.org/ValueSet/ex-paymenttype
 */
export const ExamplePaymentTypeCodesCode = {
  /**
   * Complete
   */
  complete: "complete",

  /**
   * Partial
   */
  partial: "partial",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExamplePaymentTypeCodesCode =
  typeof ExamplePaymentTypeCodesCode[keyof typeof ExamplePaymentTypeCodesCode];
