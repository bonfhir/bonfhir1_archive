/**
 * A value representing the level of proficiency in a language.

*Example:*Excellent, good, fair, poor.
 * http://terminology.hl7.org/ValueSet/v3-LanguageAbilityProficiency
 */
export const LanguageAbilityProficiencyCode = {
  /**
   * Excellent
   */
  E: "E",

  /**
   * Fair
   */
  F: "F",

  /**
   * Good
   */
  G: "G",

  /**
   * Poor
   */
  P: "P",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LanguageAbilityProficiencyCode =
  typeof LanguageAbilityProficiencyCode[keyof typeof LanguageAbilityProficiencyCode];
