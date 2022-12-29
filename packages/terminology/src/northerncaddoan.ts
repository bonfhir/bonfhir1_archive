/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NorthernCaddoan
 */
export const NorthernCaddoanCode = {
  /**
   * Arikara
   */
  Arikara: "x-ARI",

  /**
   * Pawnee
   */
  Pawnee: "x-PAW",

  /**
   * Wichita
   */
  Wichita: "x-WIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NorthernCaddoanCode =
  typeof NorthernCaddoanCode[keyof typeof NorthernCaddoanCode];
