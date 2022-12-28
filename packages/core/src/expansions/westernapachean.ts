/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-WesternApachean
 */
export const WesternApacheanCode = {
  /**
   * Mescalero-Chiricahua
   */
  "x-APM": "x-APM",

  /**
   * Western Apache
   */
  "x-APW": "x-APW",

  /**
   * Dine
   */
  "x-NAV": "x-NAV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WesternApacheanCode =
  typeof WesternApacheanCode[keyof typeof WesternApacheanCode];
