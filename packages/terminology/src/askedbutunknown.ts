/**
 * Information was sought but not found (e.g., patient was asked but didn't know)
 * http://terminology.hl7.org/ValueSet/v3-AskedButUnknown
 */
export const AskedButUnknownCode = {
  /**
   * asked but unknown
   */
  ASKU: "ASKU",

  /**
   * temporarily unavailable
   */
  NAV: "NAV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AskedButUnknownCode =
  typeof AskedButUnknownCode[keyof typeof AskedButUnknownCode];
