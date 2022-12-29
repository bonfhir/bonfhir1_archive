/**
 * Value Set of codes that record the state of a document in a workflow.
 * http://terminology.hl7.org/ValueSet/v2-0271
 */
export const Hl7VSDocumentCompletionStatusCode = {
  /**
   * Dictated
   */
  Dictated: "DI",

  /**
   * Documented
   */
  Documented: "DO",

  /**
   * In Progress
   */
  InProgress: "IP",

  /**
   * Incomplete
   */
  Incomplete: "IN",

  /**
   * Pre-authenticated
   */
  Preauthenticated: "PA",

  /**
   * Authenticated
   */
  Authenticated: "AU",

  /**
   * Legally authenticated
   */
  Legallyauthenticated: "LA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDocumentCompletionStatusCode =
  typeof Hl7VSDocumentCompletionStatusCode[keyof typeof Hl7VSDocumentCompletionStatusCode];
