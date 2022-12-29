/**
 * Value Set of codes which specify the level of knowledge a person possesses with respect to a language ability identified.
 * http://terminology.hl7.org/ValueSet/v2-0404
 */
export const Hl7VSLanguageProficiencyCode = {
  /**
   * Excellent
   */
  Excellent: "1",

  /**
   * Good
   */
  Good: "2",

  /**
   * Fair
   */
  Fair: "3",

  /**
   * Poor
   */
  Poor: "4",

  /**
   * Some (level unknown)
   */
  Somelevelunknown: "5",

  /**
   * None
   */
  None: "6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLanguageProficiencyCode =
  typeof Hl7VSLanguageProficiencyCode[keyof typeof Hl7VSLanguageProficiencyCode];
