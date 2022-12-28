/**
 * Value Set of codes that record the state of a document in a workflow.
 * http://terminology.hl7.org/ValueSet/v2-0271
 */
export const Hl7VSDocumentCompletionStatusCode = {
  /**
   * Dictated
   */
  DI: "DI",

  /**
   * Documented
   */
  DO: "DO",

  /**
   * In Progress
   */
  IP: "IP",

  /**
   * Incomplete
   */
  IN: "IN",

  /**
   * Pre-authenticated
   */
  PA: "PA",

  /**
   * Authenticated
   */
  AU: "AU",

  /**
   * Legally authenticated
   */
  LA: "LA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDocumentCompletionStatusCode =
  typeof Hl7VSDocumentCompletionStatusCode[keyof typeof Hl7VSDocumentCompletionStatusCode];
