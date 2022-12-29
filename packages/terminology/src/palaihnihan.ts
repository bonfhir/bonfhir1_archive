/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Palaihnihan
 */
export const PalaihnihanCode = {
  /**
   * Achumawi
   */
  Achumawi: "x-ACH",

  /**
   * Atsugewi
   */
  Atsugewi: "x-ATW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PalaihnihanCode =
  typeof PalaihnihanCode[keyof typeof PalaihnihanCode];
