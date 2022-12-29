/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EskimoAleut
 */
export const EskimoAleutCode = {
  /**
   * Aleut
   */
  Aleut: "_Aleut",

  /**
   * Aleut
   */
  Aleut: "x-ALW",

  /**
   * Eskimoan
   */
  Eskimoan: "_Eskimoan",

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
export type EskimoAleutCode =
  typeof EskimoAleutCode[keyof typeof EskimoAleutCode];
