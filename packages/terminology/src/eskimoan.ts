/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Eskimoan
 */
export const EskimoanCode = {
  /**
   * InuitInupiaq
   */
  _InuitInupiaq: "_InuitInupiaq",

  /**
   * North Alaskan Inuktitut
   */
  "x-ESI": "x-ESI",

  /**
   * Northwest Alaska Inuktitut
   */
  "x-ESK": "x-ESK",

  /**
   * SirenikskiYupik
   */
  _SirenikskiYupik: "_SirenikskiYupik",

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
export type EskimoanCode = typeof EskimoanCode[keyof typeof EskimoanCode];
