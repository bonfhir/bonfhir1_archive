/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-WesternApachean
 */
export const WesternApacheanCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WesternApacheanCode =
  typeof WesternApacheanCode[keyof typeof WesternApacheanCode];
