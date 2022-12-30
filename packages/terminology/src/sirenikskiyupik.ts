/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SirenikskiYupik
 */
export const SirenikskiYupikCode = {
  /**
   * Pacific Yupik Gulf
   */
  "x-EMS": "x-EMS",

  /**
   * Central Siberian Yupik
   */
  "x-ESS": "x-ESS",

  /**
   * Central Alaskan Yupik
   */
  "x-ESU": "x-ESU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SirenikskiYupikCode =
  typeof SirenikskiYupikCode[keyof typeof SirenikskiYupikCode];
