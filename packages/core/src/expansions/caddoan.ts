/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Caddoan
 */
export const CaddoanCode = {
  /**
   * NorthernCaddoan
   */
  _NorthernCaddoan: "_NorthernCaddoan",

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

  /**
   * SouthernCaddoan
   */
  _SouthernCaddoan: "_SouthernCaddoan",

  /**
   * Caddo
   */
  "x-CAD": "x-CAD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CaddoanCode = typeof CaddoanCode[keyof typeof CaddoanCode];
