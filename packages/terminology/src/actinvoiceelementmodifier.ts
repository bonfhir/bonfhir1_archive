/**
 * Processing consideration and clarification codes.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceElementModifier
 */
export const ActInvoiceElementModifierCode = {
  /**
   * Electronic Form To Follow
   */
  ElectronicFormToFollow: "EFORM",

  /**
   * Fax To Follow
   */
  FaxToFollow: "FAX",

  /**
   * Last Invoice
   */
  LastInvoice: "LINV",

  /**
   * Paper Documentation To Follow
   */
  PaperDocumentationToFollow: "PAPER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceElementModifierCode =
  typeof ActInvoiceElementModifierCode[keyof typeof ActInvoiceElementModifierCode];
