/**
 * An abstract domain that encompasses the roles involved in submitting, responding to and managing invoices or claims for health care coverage.
 * http://terminology.hl7.org/ValueSet/v3-xRoleClassCoverageInvoice
 */
export const XRoleClassCoverageInvoiceCode = {
  /**
   * payee
   */
  PAYEE: "PAYEE",

  /**
   * invoice payor
   */
  PAYOR: "PAYOR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XRoleClassCoverageInvoiceCode =
  typeof XRoleClassCoverageInvoiceCode[keyof typeof XRoleClassCoverageInvoiceCode];
