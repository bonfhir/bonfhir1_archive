/**
 * Value Set of codes used to specify the processing status for an Invoice Processing Result.
 * http://terminology.hl7.org/ValueSet/v2-0571
 */
export const Hl7VSInvoiceProcessingResultsStatusCode = {
  /**
   * Acknowledge
   */
  ACK: "ACK",

  /**
   * Reject
   */
  REJECT: "REJECT",

  /**
   * Pending
   */
  PEND: "PEND",

  /**
   * Adjudicated to Zero
   */
  ADJZER: "ADJZER",

  /**
   * Adjudicated as Submitted
   */
  ADJSUB: "ADJSUB",

  /**
   * Adjudicated with Adjustments
   */
  ADJ: "ADJ",

  /**
   * Paid
   */
  PAID: "PAID",

  /**
   * Pre-Determination
   */
  PRED: "PRED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInvoiceProcessingResultsStatusCode =
  typeof Hl7VSInvoiceProcessingResultsStatusCode[keyof typeof Hl7VSInvoiceProcessingResultsStatusCode];
