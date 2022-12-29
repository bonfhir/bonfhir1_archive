/**
 * Modifiers of role based access rights (multiple allowed)

*Usage Note:* All codes that are referenced by this value set were retired as of the November 2013 Harmonization cycle. Guidance for what to use instead of the v:ConfidentialityModifers leaf concepts: celebrity, sensitive, and taboo: These codes have been revised and are now included under v:ActCode at:

 *  V:ActInformationSensitivityPolicy:2.16.840.1.113883.1.11.20429 - taboo
 *  V:InformationSensitivityPolicy:2.16.840.1.113883.1.11.20428 - celebrity/VIP and patient requested sensitivity
 * http://terminology.hl7.org/ValueSet/v3-ConfidentialityModifiers
 */
export const ConfidentialityModifiersCode = {
  /**
   * celebrity
   */
  celebrity: "C",

  /**
   * sensitive
   */
  sensitive: "S",

  /**
   * taboo
   */
  taboo: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConfidentialityModifiersCode =
  typeof ConfidentialityModifiersCode[keyof typeof ConfidentialityModifiersCode];
