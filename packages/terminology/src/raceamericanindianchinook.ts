/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChinook
 */
export const RaceAmericanIndianChinookCode = {
  /**
   * Chinook
   */
  "1114-8": "1114-8",

  /**
   * Clatsop
   */
  "1115-5": "1115-5",

  /**
   * Columbia River Chinook
   */
  "1116-3": "1116-3",

  /**
   * Kathlamet
   */
  "1117-1": "1117-1",

  /**
   * Upper Chinook
   */
  "1118-9": "1118-9",

  /**
   * Wakiakum Chinook
   */
  "1119-7": "1119-7",

  /**
   * Willapa Chinook
   */
  "1120-5": "1120-5",

  /**
   * Wishram
   */
  "1121-3": "1121-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChinookCode =
  typeof RaceAmericanIndianChinookCode[keyof typeof RaceAmericanIndianChinookCode];
