/**
 * Codes identifying the lifecycle stage of an Invoice.
 * http://hl7.org/fhir/ValueSet/invoice-status
 */
export const InvoiceStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvoiceStatusCode =
  typeof InvoiceStatusCode[keyof typeof InvoiceStatusCode];
