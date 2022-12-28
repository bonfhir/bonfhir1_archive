/**
 * Value Set of codes that specify codes that indicate the ability that a Staff Member possesses with respect to the language.
 * http://terminology.hl7.org/ValueSet/v2-0403
 */
export const Hl7VSLanguageAbilityCode = {
  /**
   * Read
   */
  "1": "1",

  /**
   * Write
   */
  "2": "2",

  /**
   * Speak
   */
  "3": "3",

  /**
   * Understand
   */
  "4": "4",

  /**
   * Sign
   */
  "5": "5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLanguageAbilityCode =
  typeof Hl7VSLanguageAbilityCode[keyof typeof Hl7VSLanguageAbilityCode];
