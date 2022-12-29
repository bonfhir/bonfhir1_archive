/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SirenikskiYupik
 */
export const SirenikskiYupikCode = {
  /**
   * Pacific Yupik Gulf
   */
  PacificYupikGulf: "x-EMS",

  /**
   * Central Siberian Yupik
   */
  CentralSiberianYupik: "x-ESS",

  /**
   * Central Alaskan Yupik
   */
  CentralAlaskanYupik: "x-ESU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SirenikskiYupikCode =
  typeof SirenikskiYupikCode[keyof typeof SirenikskiYupikCode];
