/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CentralNumic
 */
export const CentralNumicCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CentralNumicCode =
  typeof CentralNumicCode[keyof typeof CentralNumicCode];
