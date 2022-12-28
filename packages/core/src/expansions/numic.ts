/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Numic
 */
export const NumicCode = {
  /**
   * CentralNumic
   */
  _CentralNumic: "_CentralNumic",

  /**
   * Comanche
   */
  "x-COM": "x-COM",

  /**
   * Panamint
   */
  "x-PAR": "x-PAR",

  /**
   * Shoshone
   */
  "x-SHH": "x-SHH",

  /**
   * SouthernNumic
   */
  _SouthernNumic: "_SouthernNumic",

  /**
   * Kawaiisu
   */
  "x-KAW": "x-KAW",

  /**
   * Ute-Southern Paiute
   */
  "x-UTE": "x-UTE",

  /**
   * WesternNumic
   */
  _WesternNumic: "_WesternNumic",

  /**
   * Mono
   */
  "x-MON": "x-MON",

  /**
   * Northern Paiute-Bannock
   */
  "x-PAO": "x-PAO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NumicCode = typeof NumicCode[keyof typeof NumicCode];
