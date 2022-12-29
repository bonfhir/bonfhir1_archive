/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-HL7SearchUse
 */
export const HL7SearchUseCode = {
  /**
   * search
   */
  search: "SRCH",

  /**
   * phonetic
   */
  phonetic: "PHON",

  /**
   * Soundex
   */
  Soundex: "SNDX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7SearchUseCode =
  typeof HL7SearchUseCode[keyof typeof HL7SearchUseCode];
