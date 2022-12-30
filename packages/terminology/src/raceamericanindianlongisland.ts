/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianLongIsland
 */
export const RaceAmericanIndianLongIslandCode = {
  /**
   * Long Island
   */
  "1325-0": "1325-0",

  /**
   * Matinecock
   */
  "1326-8": "1326-8",

  /**
   * Montauk
   */
  "1327-6": "1327-6",

  /**
   * Poospatuck
   */
  "1328-4": "1328-4",

  /**
   * Setauket
   */
  "1329-2": "1329-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianLongIslandCode =
  typeof RaceAmericanIndianLongIslandCode[keyof typeof RaceAmericanIndianLongIslandCode];
