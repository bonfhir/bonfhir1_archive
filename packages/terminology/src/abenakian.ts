/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Abenakian
 */
export const AbenakianCode = {
  /**
   * Eastern Abenaki
   */
  EasternAbenaki: "x-AAQ",

  /**
   * Western Abenaki
   */
  WesternAbenaki: "x-ABE",

  /**
   * Maliseet-Passamaquoddy
   */
  MaliseetPassamaquoddy: "x-MAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AbenakianCode = typeof AbenakianCode[keyof typeof AbenakianCode];
