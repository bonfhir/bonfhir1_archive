/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Eskimoan
 */
export const EskimoanCode = {
  /**
   * InuitInupiaq
   */
  InuitInupiaq: "_InuitInupiaq",

  /**
   * North Alaskan Inuktitut
   */
  NorthAlaskanInuktitut: "x-ESI",

  /**
   * Northwest Alaska Inuktitut
   */
  NorthwestAlaskaInuktitut: "x-ESK",

  /**
   * SirenikskiYupik
   */
  SirenikskiYupik: "_SirenikskiYupik",

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
export type EskimoanCode = typeof EskimoanCode[keyof typeof EskimoanCode];
