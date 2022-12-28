/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PlateauPenutian
 */
export const PlateauPenutianCode = {
  /**
   * Sahaptian
   */
  _Sahaptian: "_Sahaptian",

  /**
   * Umatilla
   */
  "x-UMA": "x-UMA",

  /**
   * Walla Walla
   */
  "x-WAA": "x-WAA",

  /**
   * Tenino
   */
  "x-WAR": "x-WAR",

  /**
   * Yakima
   */
  "x-YAK": "x-YAK",

  /**
   * Klamath-Modoc
   */
  "x-KLA": "x-KLA",

  /**
   * Nez Perce
   */
  "x-NEZ": "x-NEZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PlateauPenutianCode =
  typeof PlateauPenutianCode[keyof typeof PlateauPenutianCode];
