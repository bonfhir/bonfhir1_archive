/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-KiowaTanoan
 */
export const KiowaTanoanCode = {
  /**
   * Tiwa
   */
  _Tiwa: "_Tiwa",

  /**
   * Northern Tiwa
   */
  "x-TAO": "x-TAO",

  /**
   * Southern Tiwa
   */
  "x-TIX": "x-TIX",

  /**
   * Kiowa
   */
  "x-KIO": "x-KIO",

  /**
   * Tewa
   */
  "x-TEW": "x-TEW",

  /**
   * Jemez
   */
  "x-TOW": "x-TOW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KiowaTanoanCode =
  typeof KiowaTanoanCode[keyof typeof KiowaTanoanCode];
