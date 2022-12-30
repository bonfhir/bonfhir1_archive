/**
 * This value set includes sample Consent Action codes.
 * http://terminology.hl7.org/ValueSet/consent-action
 */
export const ConsentActionCodesCode = {
  /**
   * Collect
   */
  collect: "collect",

  /**
   * Access
   */
  access: "access",

  /**
   * Use
   */
  use: "use",

  /**
   * Disclose
   */
  disclose: "disclose",

  /**
   * Access and Correct
   */
  correct: "correct",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentActionCodesCode =
  typeof ConsentActionCodesCode[keyof typeof ConsentActionCodesCode];
