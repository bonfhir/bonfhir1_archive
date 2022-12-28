/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Sahaptian
 */
export const SahaptianCode = {
  /**
   * Umatilla
   */
  "x-UMA": "x-UMA",

  /**
   * Walla Walla
   */
  "x-WAA": "x-WAA",

  /**
   * Tenino
   */
  "x-WAR": "x-WAR",

  /**
   * Yakima
   */
  "x-YAK": "x-YAK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SahaptianCode = typeof SahaptianCode[keyof typeof SahaptianCode];
