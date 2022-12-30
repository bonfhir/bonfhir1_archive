/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-MobilityImpaired
 */
export const MobilityImpairedCode = {
  /**
   * Mobility impaired
   */
  "5": "5",

  /**
   * Requires crib
   */
  CB: "CB",

  /**
   * Requires crutches
   */
  CR: "CR",

  /**
   * Requires gurney
   */
  G: "G",

  /**
   * Requires wheelchair
   */
  WC: "WC",

  /**
   * Requires walker
   */
  WK: "WK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MobilityImpairedCode =
  typeof MobilityImpairedCode[keyof typeof MobilityImpairedCode];
