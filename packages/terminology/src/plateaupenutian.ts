/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PlateauPenutian
 */
export const PlateauPenutianCode = {
  /**
   * Sahaptian
   */
  Sahaptian: "_Sahaptian",

  /**
   * Umatilla
   */
  Umatilla: "x-UMA",

  /**
   * Walla Walla
   */
  WallaWalla: "x-WAA",

  /**
   * Tenino
   */
  Tenino: "x-WAR",

  /**
   * Yakima
   */
  Yakima: "x-YAK",

  /**
   * Klamath-Modoc
   */
  KlamathModoc: "x-KLA",

  /**
   * Nez Perce
   */
  NezPerce: "x-NEZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PlateauPenutianCode =
  typeof PlateauPenutianCode[keyof typeof PlateauPenutianCode];
