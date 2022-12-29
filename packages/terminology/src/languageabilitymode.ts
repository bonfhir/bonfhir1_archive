/**
 * A value representing the method of expression of the language.

*Example:*Expressed spoken, expressed written, expressed signed, received spoken, received written, received signed.
 * http://terminology.hl7.org/ValueSet/v3-LanguageAbilityMode
 */
export const LanguageAbilityModeCode = {
  /**
   * Expressed signed
   */
  Expressedsigned: "ESGN",

  /**
   * Expressed spoken
   */
  Expressedspoken: "ESP",

  /**
   * Expressed written
   */
  Expressedwritten: "EWR",

  /**
   * Received signed
   */
  Receivedsigned: "RSGN",

  /**
   * Received spoken
   */
  Receivedspoken: "RSP",

  /**
   * Received written
   */
  Receivedwritten: "RWR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LanguageAbilityModeCode =
  typeof LanguageAbilityModeCode[keyof typeof LanguageAbilityModeCode];
