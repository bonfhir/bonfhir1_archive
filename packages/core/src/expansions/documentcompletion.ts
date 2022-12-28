/**
 * Identifies the current completion state of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-DocumentCompletion
 */
export const DocumentCompletionCode = {
  /**
   * authenticated
   */
  AU: "AU",

  /**
   * dictated
   */
  DI: "DI",

  /**
   * documented
   */
  DO: "DO",

  /**
   * incomplete
   */
  IN: "IN",

  /**
   * in progress
   */
  IP: "IP",

  /**
   * legally authenticated
   */
  LA: "LA",

  /**
   * nullified document
   */
  NU: "NU",

  /**
   * pre-authenticated
   */
  PA: "PA",

  /**
   * unsigned completed document
   */
  UC: "UC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentCompletionCode =
  typeof DocumentCompletionCode[keyof typeof DocumentCompletionCode];
