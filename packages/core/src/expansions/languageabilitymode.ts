/**
 * A value representing the method of expression of the language.

*Example:*Expressed spoken, expressed written, expressed signed, received spoken, received written, received signed.
 * http://terminology.hl7.org/ValueSet/v3-LanguageAbilityMode
 */
export const LanguageAbilityModeCode = {
  /**
   * Expressed signed
   */
  ESGN: "ESGN",

  /**
   * Expressed spoken
   */
  ESP: "ESP",

  /**
   * Expressed written
   */
  EWR: "EWR",

  /**
   * Received signed
   */
  RSGN: "RSGN",

  /**
   * Received spoken
   */
  RSP: "RSP",

  /**
   * Received written
   */
  RWR: "RWR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LanguageAbilityModeCode =
  typeof LanguageAbilityModeCode[keyof typeof LanguageAbilityModeCode];
