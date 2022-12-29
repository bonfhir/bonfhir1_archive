/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Apachean
 */
export const ApacheanCode = {
  /**
   * EasternApachean
   */
  EasternApachean: "_EasternApachean",

  /**
   * Jicarilla
   */
  Jicarilla: "x-APJ",

  /**
   * Lipan
   */
  Lipan: "x-APL",

  /**
   * WesternApachean
   */
  WesternApachean: "_WesternApachean",

  /**
   * Mescalero-Chiricahua
   */
  MescaleroChiricahua: "x-APM",

  /**
   * Western Apache
   */
  WesternApache: "x-APW",

  /**
   * Dine
   */
  Dine: "x-NAV",

  /**
   * Kiowa Apache
   */
  KiowaApache: "x-APK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ApacheanCode = typeof ApacheanCode[keyof typeof ApacheanCode];
