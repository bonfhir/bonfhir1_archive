/**
 * Information was sought but not found (e.g., patient was asked but didn't know)
 * http://terminology.hl7.org/ValueSet/v3-AskedButUnknown
 */
export const AskedButUnknownCode = {
  /**
   * asked but unknown
   */
  askedbutunknown: "ASKU",

  /**
   * temporarily unavailable
   */
  temporarilyunavailable: "NAV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AskedButUnknownCode =
  typeof AskedButUnknownCode[keyof typeof AskedButUnknownCode];
