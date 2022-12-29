/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Caddoan
 */
export const CaddoanCode = {
  /**
   * NorthernCaddoan
   */
  NorthernCaddoan: "_NorthernCaddoan",

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

  /**
   * SouthernCaddoan
   */
  SouthernCaddoan: "_SouthernCaddoan",

  /**
   * Caddo
   */
  Caddo: "x-CAD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CaddoanCode = typeof CaddoanCode[keyof typeof CaddoanCode];
