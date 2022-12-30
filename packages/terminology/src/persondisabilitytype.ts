/**
 * A code identifying a person's disability.
 * http://terminology.hl7.org/ValueSet/v3-PersonDisabilityType
 */
export const PersonDisabilityTypeCode = {
  /**
   * Vision impaired
   */
  "1": "1",

  /**
   * Hearing impaired
   */
  "2": "2",

  /**
   * Speech impaired
   */
  "3": "3",

  /**
   * Mentally impaired
   */
  "4": "4",

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
export type PersonDisabilityTypeCode =
  typeof PersonDisabilityTypeCode[keyof typeof PersonDisabilityTypeCode];
