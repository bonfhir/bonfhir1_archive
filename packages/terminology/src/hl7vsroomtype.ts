/**
 * Value Set of codes that specify the room type.
 * http://terminology.hl7.org/ValueSet/v2-0145
 */
export const Hl7VSRoomTypeCode = {
  /**
   * Private room
   */
  Privateroom: "PRI",

  /**
   * Second private room
   */
  Secondprivateroom: "2PRI",

  /**
   * Semi-private room
   */
  Semiprivateroom: "SPR",

  /**
   * Second semi-private room
   */
  Secondsemiprivateroom: "2SPR",

  /**
   * Intensive care unit
   */
  Intensivecareunit: "ICU",

  /**
   * Second intensive care unit
   */
  Secondintensivecareunit: "2ICU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRoomTypeCode =
  typeof Hl7VSRoomTypeCode[keyof typeof Hl7VSRoomTypeCode];
