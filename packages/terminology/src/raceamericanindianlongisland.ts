/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianLongIsland
 */
export const RaceAmericanIndianLongIslandCode = {
  /**
   * Long Island
   */
  LongIsland: "1325-0",

  /**
   * Matinecock
   */
  Matinecock: "1326-8",

  /**
   * Montauk
   */
  Montauk: "1327-6",

  /**
   * Poospatuck
   */
  Poospatuck: "1328-4",

  /**
   * Setauket
   */
  Setauket: "1329-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianLongIslandCode =
  typeof RaceAmericanIndianLongIslandCode[keyof typeof RaceAmericanIndianLongIslandCode];
