/**
 * The territory of a city, town or other municipality.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassCityOrTown
 */
export const EntityClassCityOrTownCode = {
  /**
   * city or town
   */
  CITY: "CITY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassCityOrTownCode =
  typeof EntityClassCityOrTownCode[keyof typeof EntityClassCityOrTownCode];
