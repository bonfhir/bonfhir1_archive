/**
 * Value Set of codes which specify the level of knowledge a person possesses with respect to a language ability identified.
 * http://terminology.hl7.org/ValueSet/v2-0404
 */
export const Hl7VSLanguageProficiencyCode = {
  /**
   * Excellent
   */
  "1": "1",

  /**
   * Good
   */
  "2": "2",

  /**
   * Fair
   */
  "3": "3",

  /**
   * Poor
   */
  "4": "4",

  /**
   * Some (level unknown)
   */
  "5": "5",

  /**
   * None
   */
  "6": "6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLanguageProficiencyCode =
  typeof Hl7VSLanguageProficiencyCode[keyof typeof Hl7VSLanguageProficiencyCode];
