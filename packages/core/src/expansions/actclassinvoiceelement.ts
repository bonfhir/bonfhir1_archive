/**
 * Represents concepts related to invoice processing in health care
 * http://terminology.hl7.org/ValueSet/v3-ActClassInvoiceElement
 */
export const ActClassInvoiceElementCode = {
  /**
   * invoice element
   */
  INVE: "INVE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassInvoiceElementCode =
  typeof ActClassInvoiceElementCode[keyof typeof ActClassInvoiceElementCode];
