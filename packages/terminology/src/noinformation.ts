/**
 * **Description:**The value is exceptional (missing, omitted, incomplete, improper). No information as to the reason for being an exceptional value is provided. This is the most general exceptional value. It is also the default exceptional value.
 * http://terminology.hl7.org/ValueSet/v3-NoInformation
 */
export const NoInformationCode = {
  /**
   * NoInformation
   */
  NI: "NI",

  /**
   * invalid
   */
  INV: "INV",

  /**
   * derived
   */
  DER: "DER",

  /**
   * other
   */
  OTH: "OTH",

  /**
   * negative infinity
   */
  NINF: "NINF",

  /**
   * positive infinity
   */
  PINF: "PINF",

  /**
   * un-encoded
   */
  UNC: "UNC",

  /**
   * masked
   */
  MSK: "MSK",

  /**
   * not applicable
   */
  NA: "NA",

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
export type NoInformationCode =
  typeof NoInformationCode[keyof typeof NoInformationCode];
