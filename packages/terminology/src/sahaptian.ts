/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Sahaptian
 */
export const SahaptianCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SahaptianCode = typeof SahaptianCode[keyof typeof SahaptianCode];
