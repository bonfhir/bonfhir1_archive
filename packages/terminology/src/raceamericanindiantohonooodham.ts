/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianTohonoOOdham
 */
export const RaceAmericanIndianTohonoOOdhamCode = {
  /**
   * Tohono O'Odham
   */
  "1653-5": "1653-5",

  /**
   * Ak-Chin
   */
  "1654-3": "1654-3",

  /**
   * Gila Bend
   */
  "1655-0": "1655-0",

  /**
   * San Xavier
   */
  "1656-8": "1656-8",

  /**
   * Sells
   */
  "1657-6": "1657-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianTohonoOOdhamCode =
  typeof RaceAmericanIndianTohonoOOdhamCode[keyof typeof RaceAmericanIndianTohonoOOdhamCode];
