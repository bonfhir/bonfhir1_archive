/**
 * **Description:**The value is exceptional (missing, omitted, incomplete, improper). No information as to the reason for being an exceptional value is provided. This is the most general exceptional value. It is also the default exceptional value.
 * http://terminology.hl7.org/ValueSet/v3-NoInformation
 */
export const NoInformationCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NoInformationCode =
  typeof NoInformationCode[keyof typeof NoInformationCode];
