/**
 * A proper value is applicable, but not known.
 * http://terminology.hl7.org/ValueSet/v3-Unknown
 */
export const UnknownCode = {
  /**
   * unknown
   */
  UNK: "UNK",

  /**
   * asked but unknown
   */
  ASKU: "ASKU",

  /**
   * temporarily unavailable
   */
  NAV: "NAV",

  /**
   * not asked
   */
  NASK: "NASK",

  /**
   * Not available
   */
  NAVU: "NAVU",

  /**
   * Sufficient Quantity
   */
  QS: "QS",

  /**
   * trace
   */
  TRC: "TRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UnknownCode = typeof UnknownCode[keyof typeof UnknownCode];
