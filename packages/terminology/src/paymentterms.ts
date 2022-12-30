/**
 * Describes payment terms for a financial transaction, used in an invoice.

This is typically expressed as a responsibility of the acceptor or payor of an invoice.
 * http://terminology.hl7.org/ValueSet/v3-PaymentTerms
 */
export const PaymentTermsCode = {
  /**
   * Cash on Delivery
   */
  COD: "COD",

  /**
   * Net 30 days
   */
  N30: "N30",

  /**
   * Net 60 days
   */
  N60: "N60",

  /**
   * Net 90 days
   */
  N90: "N90",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PaymentTermsCode =
  typeof PaymentTermsCode[keyof typeof PaymentTermsCode];
