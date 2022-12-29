/**
 * This value set includes sample Consent Action codes.
 * http://terminology.hl7.org/ValueSet/consent-action
 */
export const ConsentActionCodesCode = {
  /**
   * Collect
   */
  Collect: "collect",

  /**
   * Access
   */
  Access: "access",

  /**
   * Use
   */
  Use: "use",

  /**
   * Disclose
   */
  Disclose: "disclose",

  /**
   * Access and Correct
   */
  AccessandCorrect: "correct",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentActionCodesCode =
  typeof ConsentActionCodesCode[keyof typeof ConsentActionCodesCode];
