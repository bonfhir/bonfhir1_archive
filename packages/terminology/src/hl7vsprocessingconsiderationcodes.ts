/**
 * Value Set of codes that specify special processing requested of Payer for this Product/Service Line Item (e.g., hold until paper supporting documentation is received by Payer).
 * http://terminology.hl7.org/ValueSet/v2-0562
 */
export const Hl7VSProcessingConsiderationCodesCode = {
  /**
   * Paper documentation to follow
   */
  PAPER: "PAPER",

  /**
   * Electronic form to follow
   */
  EFORM: "EFORM",

  /**
   * Fax to follow
   */
  FAX: "FAX",

  /**
   * Real Time Adjudication Processing
   */
  RTADJ: "RTADJ",

  /**
   * Deferred Adjudication Processing
   */
  DFADJ: "DFADJ",

  /**
   * Delayed by a Previous Payer
   */
  PYRDELAY: "PYRDELAY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessingConsiderationCodesCode =
  typeof Hl7VSProcessingConsiderationCodesCode[keyof typeof Hl7VSProcessingConsiderationCodesCode];
