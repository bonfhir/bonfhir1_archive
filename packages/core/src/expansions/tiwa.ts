/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Tiwa
 */
export const TiwaCode = {
  /**
   * Northern Tiwa
   */
  "x-TAO": "x-TAO",

  /**
   * Southern Tiwa
   */
  "x-TIX": "x-TIX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TiwaCode = typeof TiwaCode[keyof typeof TiwaCode];
