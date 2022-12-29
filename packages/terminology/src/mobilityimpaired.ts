/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-MobilityImpaired
 */
export const MobilityImpairedCode = {
  /**
   * Mobility impaired
   */
  Mobilityimpaired: "5",

  /**
   * Requires crib
   */
  Requirescrib: "CB",

  /**
   * Requires crutches
   */
  Requirescrutches: "CR",

  /**
   * Requires gurney
   */
  Requiresgurney: "G",

  /**
   * Requires wheelchair
   */
  Requireswheelchair: "WC",

  /**
   * Requires walker
   */
  Requireswalker: "WK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MobilityImpairedCode =
  typeof MobilityImpairedCode[keyof typeof MobilityImpairedCode];
