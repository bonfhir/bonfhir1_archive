/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-NorthernCaddoan
 */
export const NorthernCaddoanCode = {
  /**
   * Arikara
   */
  "x-ARI": "x-ARI",

  /**
   * Pawnee
   */
  "x-PAW": "x-PAW",

  /**
   * Wichita
   */
  "x-WIC": "x-WIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NorthernCaddoanCode =
  typeof NorthernCaddoanCode[keyof typeof NorthernCaddoanCode];
