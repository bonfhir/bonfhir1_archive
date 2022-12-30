/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Apachean
 */
export const ApacheanCode = {
  /**
   * EasternApachean
   */
  _EasternApachean: "_EasternApachean",

  /**
   * Jicarilla
   */
  "x-APJ": "x-APJ",

  /**
   * Lipan
   */
  "x-APL": "x-APL",

  /**
   * WesternApachean
   */
  _WesternApachean: "_WesternApachean",

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

  /**
   * Kiowa Apache
   */
  "x-APK": "x-APK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ApacheanCode = typeof ApacheanCode[keyof typeof ApacheanCode];
