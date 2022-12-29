/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CentralNumic
 */
export const CentralNumicCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CentralNumicCode =
  typeof CentralNumicCode[keyof typeof CentralNumicCode];
