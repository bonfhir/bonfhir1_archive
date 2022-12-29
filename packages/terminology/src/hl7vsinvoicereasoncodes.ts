/**
 * Value Set of codes that specify the reason for an invoice.
 * http://terminology.hl7.org/ValueSet/v2-0554
 */
export const Hl7VSInvoiceReasonCodesCode = {
  /**
   * Late Invoice
   */
  LateInvoice: "LATE",

  /**
   * Normal submission
   */
  Normalsubmission: "NORM",

  /**
   * Subscriber coverage problem
   */
  Subscribercoverageproblem: "SUB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInvoiceReasonCodesCode =
  typeof Hl7VSInvoiceReasonCodesCode[keyof typeof Hl7VSInvoiceReasonCodesCode];
