/**
 * Concepts used to identify the check digit scheme employed when a check digit is used in various HL7 Version 2.x datatypes.
 * http://terminology.hl7.org/ValueSet/v2-0061
 */
export const Hl7VSCheckDigitSchemeCode = {
  /**
   * Bank Card Validation Number
   */
  BCV: "BCV",

  /**
   * Check digit algorithm in the US National Provider Identifier
   */
  NPI: "NPI",

  /**
   * ISO 7064: 1983
   */
  ISO: "ISO",

  /**
   * Mod 10 algorithm
   */
  M10: "M10",

  /**
   * Mod 11 algorithm
   */
  M11: "M11",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCheckDigitSchemeCode =
  typeof Hl7VSCheckDigitSchemeCode[keyof typeof Hl7VSCheckDigitSchemeCode];
