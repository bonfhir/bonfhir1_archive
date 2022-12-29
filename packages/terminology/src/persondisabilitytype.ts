/**
 * A code identifying a person's disability.
 * http://terminology.hl7.org/ValueSet/v3-PersonDisabilityType
 */
export const PersonDisabilityTypeCode = {
  /**
   * Vision impaired
   */
  Visionimpaired: "1",

  /**
   * Hearing impaired
   */
  Hearingimpaired: "2",

  /**
   * Speech impaired
   */
  Speechimpaired: "3",

  /**
   * Mentally impaired
   */
  Mentallyimpaired: "4",

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
export type PersonDisabilityTypeCode =
  typeof PersonDisabilityTypeCode[keyof typeof PersonDisabilityTypeCode];
