/**
 * Value Set of codes used to specify the processing status for an Invoice Processing Result.
 * http://terminology.hl7.org/ValueSet/v2-0571
 */
export const Hl7VSInvoiceProcessingResultsStatusCode = {
  /**
   * Acknowledge
   */
  Acknowledge: "ACK",

  /**
   * Reject
   */
  Reject: "REJECT",

  /**
   * Pending
   */
  Pending: "PEND",

  /**
   * Adjudicated to Zero
   */
  AdjudicatedtoZero: "ADJZER",

  /**
   * Adjudicated as Submitted
   */
  AdjudicatedasSubmitted: "ADJSUB",

  /**
   * Adjudicated with Adjustments
   */
  AdjudicatedwithAdjustments: "ADJ",

  /**
   * Paid
   */
  Paid: "PAID",

  /**
   * Pre-Determination
   */
  PreDetermination: "PRED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInvoiceProcessingResultsStatusCode =
  typeof Hl7VSInvoiceProcessingResultsStatusCode[keyof typeof Hl7VSInvoiceProcessingResultsStatusCode];
