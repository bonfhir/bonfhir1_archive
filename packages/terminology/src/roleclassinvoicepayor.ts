/**
 * The role of an organization that undertakes to accept claims invoices, assess the coverage or payments due for those invoices and pay to the designated payees for those invoices. This role may be either the underwriter or a third-party organization authorized by the underwriter. The scoping entity is the organization that underwrites the claimed coverage.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassInvoicePayor
 */
export const RoleClassInvoicePayorCode = {
  /**
   * invoice payor
   */
  invoicepayor: "PAYOR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassInvoicePayorCode =
  typeof RoleClassInvoicePayorCode[keyof typeof RoleClassInvoicePayorCode];
