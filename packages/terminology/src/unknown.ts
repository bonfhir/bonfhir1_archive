/**
 * A proper value is applicable, but not known.
 * http://terminology.hl7.org/ValueSet/v3-Unknown
 */
export const UnknownCode = {
  /**
   * unknown
   */
  unknown: "UNK",

  /**
   * asked but unknown
   */
  askedbutunknown: "ASKU",

  /**
   * temporarily unavailable
   */
  temporarilyunavailable: "NAV",

  /**
   * not asked
   */
  notasked: "NASK",

  /**
   * Not available
   */
  Notavailable: "NAVU",

  /**
   * Sufficient Quantity
   */
  SufficientQuantity: "QS",

  /**
   * trace
   */
  trace: "TRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UnknownCode = typeof UnknownCode[keyof typeof UnknownCode];
