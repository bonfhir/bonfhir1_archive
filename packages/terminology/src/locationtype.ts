/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 * http://terminology.hl7.org/ValueSet/location-physical-type
 */
export const LocationTypeCode = {
  /**
   * Site
   */
  Site: "si",

  /**
   * Building
   */
  Building: "bu",

  /**
   * Wing
   */
  Wing: "wi",

  /**
   * Ward
   */
  Ward: "wa",

  /**
   * Level
   */
  Level: "lvl",

  /**
   * Corridor
   */
  Corridor: "co",

  /**
   * Room
   */
  Room: "ro",

  /**
   * Bed
   */
  Bed: "bd",

  /**
   * Vehicle
   */
  Vehicle: "ve",

  /**
   * House
   */
  House: "ho",

  /**
   * Cabinet
   */
  Cabinet: "ca",

  /**
   * Road
   */
  Road: "rd",

  /**
   * Area
   */
  Area: "area",

  /**
   * Jurisdiction
   */
  Jurisdiction: "jdn",

  /**
   * Virtual
   */
  Virtual: "vi",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LocationTypeCode =
  typeof LocationTypeCode[keyof typeof LocationTypeCode];
