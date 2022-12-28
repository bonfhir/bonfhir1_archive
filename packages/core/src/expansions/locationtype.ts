/**
 * This example value set defines a set of codes that can be used to indicate the physical form of the Location.
 * http://terminology.hl7.org/ValueSet/location-physical-type
 */
export const LocationTypeCode = {
  /**
   * Site
   */
  si: "si",

  /**
   * Building
   */
  bu: "bu",

  /**
   * Wing
   */
  wi: "wi",

  /**
   * Ward
   */
  wa: "wa",

  /**
   * Level
   */
  lvl: "lvl",

  /**
   * Corridor
   */
  co: "co",

  /**
   * Room
   */
  ro: "ro",

  /**
   * Bed
   */
  bd: "bd",

  /**
   * Vehicle
   */
  ve: "ve",

  /**
   * House
   */
  ho: "ho",

  /**
   * Cabinet
   */
  ca: "ca",

  /**
   * Road
   */
  rd: "rd",

  /**
   * Area
   */
  area: "area",

  /**
   * Jurisdiction
   */
  jdn: "jdn",

  /**
   * Virtual
   */
  vi: "vi",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LocationTypeCode =
  typeof LocationTypeCode[keyof typeof LocationTypeCode];
