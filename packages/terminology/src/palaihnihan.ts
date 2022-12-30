/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Palaihnihan
 */
export const PalaihnihanCode = {
  /**
   * Achumawi
   */
  "x-ACH": "x-ACH",

  /**
   * Atsugewi
   */
  "x-ATW": "x-ATW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PalaihnihanCode =
  typeof PalaihnihanCode[keyof typeof PalaihnihanCode];
