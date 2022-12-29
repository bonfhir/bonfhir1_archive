/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianTohonoOOdham
 */
export const RaceAmericanIndianTohonoOOdhamCode = {
  /**
   * Tohono O'Odham
   */
  TohonoOOdham: "1653-5",

  /**
   * Ak-Chin
   */
  AkChin: "1654-3",

  /**
   * Gila Bend
   */
  GilaBend: "1655-0",

  /**
   * San Xavier
   */
  SanXavier: "1656-8",

  /**
   * Sells
   */
  Sells: "1657-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianTohonoOOdhamCode =
  typeof RaceAmericanIndianTohonoOOdhamCode[keyof typeof RaceAmericanIndianTohonoOOdhamCode];
