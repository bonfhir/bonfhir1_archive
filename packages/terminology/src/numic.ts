/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Numic
 */
export const NumicCode = {
  /**
   * CentralNumic
   */
  CentralNumic: "_CentralNumic",

  /**
   * Comanche
   */
  Comanche: "x-COM",

  /**
   * Panamint
   */
  Panamint: "x-PAR",

  /**
   * Shoshone
   */
  Shoshone: "x-SHH",

  /**
   * SouthernNumic
   */
  SouthernNumic: "_SouthernNumic",

  /**
   * Kawaiisu
   */
  Kawaiisu: "x-KAW",

  /**
   * Ute-Southern Paiute
   */
  UteSouthernPaiute: "x-UTE",

  /**
   * WesternNumic
   */
  WesternNumic: "_WesternNumic",

  /**
   * Mono
   */
  Mono: "x-MON",

  /**
   * Northern Paiute-Bannock
   */
  NorthernPaiuteBannock: "x-PAO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NumicCode = typeof NumicCode[keyof typeof NumicCode];
