/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SaukFoxKickapoo
 */
export const SaukFoxKickapooCode = {
  /**
   * Kickapoo
   */
  Kickapoo: "x-KIC",

  /**
   * Mesquakie
   */
  Mesquakie: "x-SAC",

  /**
   * Shawnee
   */
  Shawnee: "x-SJW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SaukFoxKickapooCode =
  typeof SaukFoxKickapooCode[keyof typeof SaukFoxKickapooCode];
