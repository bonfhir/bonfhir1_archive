/**
 * Value Set of codes that specify special processing requested of Payer for this Product/Service Line Item (e.g., hold until paper supporting documentation is received by Payer).
 * http://terminology.hl7.org/ValueSet/v2-0562
 */
export const Hl7VSProcessingConsiderationCodesCode = {
  /**
   * Paper documentation to follow
   */
  Paperdocumentationtofollow: "PAPER",

  /**
   * Electronic form to follow
   */
  Electronicformtofollow: "EFORM",

  /**
   * Fax to follow
   */
  Faxtofollow: "FAX",

  /**
   * Real Time Adjudication Processing
   */
  RealTimeAdjudicationProcessing: "RTADJ",

  /**
   * Deferred Adjudication Processing
   */
  DeferredAdjudicationProcessing: "DFADJ",

  /**
   * Delayed by a Previous Payer
   */
  DelayedbyaPreviousPayer: "PYRDELAY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessingConsiderationCodesCode =
  typeof Hl7VSProcessingConsiderationCodesCode[keyof typeof Hl7VSProcessingConsiderationCodesCode];
