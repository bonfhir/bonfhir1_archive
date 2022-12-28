/**
 * Codes indicating the kind of the price component.
 * http://hl7.org/fhir/ValueSet/invoice-priceComponentType
 */
export const InvoicePriceComponentTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvoicePriceComponentTypeCode =
  typeof InvoicePriceComponentTypeCode[keyof typeof InvoicePriceComponentTypeCode];
