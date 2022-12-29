/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Tiwa
 */
export const TiwaCode = {
  /**
   * Northern Tiwa
   */
  NorthernTiwa: "x-TAO",

  /**
   * Southern Tiwa
   */
  SouthernTiwa: "x-TIX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TiwaCode = typeof TiwaCode[keyof typeof TiwaCode];
