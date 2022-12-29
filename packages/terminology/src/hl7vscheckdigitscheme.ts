/**
 * Concepts used to identify the check digit scheme employed when a check digit is used in various HL7 Version 2.x datatypes.
 * http://terminology.hl7.org/ValueSet/v2-0061
 */
export const Hl7VSCheckDigitSchemeCode = {
  /**
   * Bank Card Validation Number
   */
  BankCardValidationNumber: "BCV",

  /**
   * Check digit algorithm in the US National Provider Identifier
   */
  CheckdigitalgorithmintheUSNationalProviderIdentifier: "NPI",

  /**
   * ISO 7064: 1983
   */
  ISO70641983: "ISO",

  /**
   * Mod 10 algorithm
   */
  Mod10algorithm: "M10",

  /**
   * Mod 11 algorithm
   */
  Mod11algorithm: "M11",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCheckDigitSchemeCode =
  typeof Hl7VSCheckDigitSchemeCode[keyof typeof Hl7VSCheckDigitSchemeCode];
