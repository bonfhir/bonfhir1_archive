/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NullFlavor
 */
export const NullFlavorCode = {
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

  /**
   * not present
   */
  NP: "NP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NullFlavorCode = typeof NullFlavorCode[keyof typeof NullFlavorCode];
