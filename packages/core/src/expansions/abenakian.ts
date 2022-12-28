/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Abenakian
 */
export const AbenakianCode = {
  /**
   * Eastern Abenaki
   */
  "x-AAQ": "x-AAQ",

  /**
   * Western Abenaki
   */
  "x-ABE": "x-ABE",

  /**
   * Maliseet-Passamaquoddy
   */
  "x-MAC": "x-MAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AbenakianCode = typeof AbenakianCode[keyof typeof AbenakianCode];
