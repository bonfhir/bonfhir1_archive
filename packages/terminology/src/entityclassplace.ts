/**
 * A physicial place or site with its containing structure. May be natural or man-made. The geographic position of a place may or may not be constant.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassPlace
 */
export const EntityClassPlaceCode = {
  /**
   * place
   */
  place: "PLC",

  /**
   * city or town
   */
  cityortown: "CITY",

  /**
   * country
   */
  country: "COUNTRY",

  /**
   * county or parish
   */
  countyorparish: "COUNTY",

  /**
   * state or province
   */
  stateorprovince: "PROVINCE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassPlaceCode =
  typeof EntityClassPlaceCode[keyof typeof EntityClassPlaceCode];
