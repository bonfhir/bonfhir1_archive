/**
 * Value Set of codes that specify the room type.
 * http://terminology.hl7.org/ValueSet/v2-0145
 */
export const Hl7VSRoomTypeCode = {
  /**
   * Private room
   */
  PRI: "PRI",

  /**
   * Second private room
   */
  "2PRI": "2PRI",

  /**
   * Semi-private room
   */
  SPR: "SPR",

  /**
   * Second semi-private room
   */
  "2SPR": "2SPR",

  /**
   * Intensive care unit
   */
  ICU: "ICU",

  /**
   * Second intensive care unit
   */
  "2ICU": "2ICU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRoomTypeCode =
  typeof Hl7VSRoomTypeCode[keyof typeof Hl7VSRoomTypeCode];
