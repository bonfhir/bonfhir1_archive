/**
 * Value Set of codes that specify codes that indicate the ability that a Staff Member possesses with respect to the language.
 * http://terminology.hl7.org/ValueSet/v2-0403
 */
export const Hl7VSLanguageAbilityCode = {
  /**
   * Read
   */
  Read: "1",

  /**
   * Write
   */
  Write: "2",

  /**
   * Speak
   */
  Speak: "3",

  /**
   * Understand
   */
  Understand: "4",

  /**
   * Sign
   */
  Sign: "5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLanguageAbilityCode =
  typeof Hl7VSLanguageAbilityCode[keyof typeof Hl7VSLanguageAbilityCode];
