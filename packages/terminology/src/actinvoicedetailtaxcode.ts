/**
 * The billable item codes to identify modifications to a billable item charge by a tax factor applied to the amount. As for example 7% provincial sales tax.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailTaxCode
 */
export const ActInvoiceDetailTaxCodeCode = {
  /**
   * federal sales tax
   */
  FST: "FST",

  /**
   * harmonized sales Tax
   */
  HST: "HST",

  /**
   * provincial/state sales tax
   */
  PST: "PST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailTaxCodeCode =
  typeof ActInvoiceDetailTaxCodeCode[keyof typeof ActInvoiceDetailTaxCodeCode];
