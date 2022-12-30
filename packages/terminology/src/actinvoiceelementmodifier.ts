/**
 * Processing consideration and clarification codes.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceElementModifier
 */
export const ActInvoiceElementModifierCode = {
  /**
   * Electronic Form To Follow
   */
  EFORM: "EFORM",

  /**
   * Fax To Follow
   */
  FAX: "FAX",

  /**
   * Last Invoice
   */
  LINV: "LINV",

  /**
   * Paper Documentation To Follow
   */
  PAPER: "PAPER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceElementModifierCode =
  typeof ActInvoiceElementModifierCode[keyof typeof ActInvoiceElementModifierCode];
