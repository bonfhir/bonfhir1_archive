/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NullFlavor
 */
export const NullFlavorCode = {
  /**
   * NoInformation
   */
  NoInformation: "NI",

  /**
   * invalid
   */
  invalid: "INV",

  /**
   * derived
   */
  derived: "DER",

  /**
   * other
   */
  other: "OTH",

  /**
   * negative infinity
   */
  negativeinfinity: "NINF",

  /**
   * positive infinity
   */
  positiveinfinity: "PINF",

  /**
   * un-encoded
   */
  unencoded: "UNC",

  /**
   * masked
   */
  masked: "MSK",

  /**
   * not applicable
   */
  notapplicable: "NA",

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

  /**
   * not present
   */
  notpresent: "NP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NullFlavorCode = typeof NullFlavorCode[keyof typeof NullFlavorCode];
