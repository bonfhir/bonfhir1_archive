/**
 * Identifies the current completion state of a clinical document.
 * http://terminology.hl7.org/ValueSet/v3-DocumentCompletion
 */
export const DocumentCompletionCode = {
  /**
   * authenticated
   */
  authenticated: "AU",

  /**
   * dictated
   */
  dictated: "DI",

  /**
   * documented
   */
  documented: "DO",

  /**
   * incomplete
   */
  incomplete: "IN",

  /**
   * in progress
   */
  inprogress: "IP",

  /**
   * legally authenticated
   */
  legallyauthenticated: "LA",

  /**
   * nullified document
   */
  nullifieddocument: "NU",

  /**
   * pre-authenticated
   */
  preauthenticated: "PA",

  /**
   * unsigned completed document
   */
  unsignedcompleteddocument: "UC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DocumentCompletionCode =
  typeof DocumentCompletionCode[keyof typeof DocumentCompletionCode];
