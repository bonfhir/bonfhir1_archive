/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-KiowaTanoan
 */
export const KiowaTanoanCode = {
  /**
   * Tiwa
   */
  Tiwa: "_Tiwa",

  /**
   * Northern Tiwa
   */
  NorthernTiwa: "x-TAO",

  /**
   * Southern Tiwa
   */
  SouthernTiwa: "x-TIX",

  /**
   * Kiowa
   */
  Kiowa: "x-KIO",

  /**
   * Tewa
   */
  Tewa: "x-TEW",

  /**
   * Jemez
   */
  Jemez: "x-TOW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KiowaTanoanCode =
  typeof KiowaTanoanCode[keyof typeof KiowaTanoanCode];
