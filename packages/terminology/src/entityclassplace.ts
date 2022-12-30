/**
 * A physicial place or site with its containing structure. May be natural or man-made. The geographic position of a place may or may not be constant.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassPlace
 */
export const EntityClassPlaceCode = {
  /**
   * place
   */
  PLC: "PLC",

  /**
   * city or town
   */
  CITY: "CITY",

  /**
   * country
   */
  COUNTRY: "COUNTRY",

  /**
   * county or parish
   */
  COUNTY: "COUNTY",

  /**
   * state or province
   */
  PROVINCE: "PROVINCE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassPlaceCode =
  typeof EntityClassPlaceCode[keyof typeof EntityClassPlaceCode];
