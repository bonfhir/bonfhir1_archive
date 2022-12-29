/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChinook
 */
export const RaceAmericanIndianChinookCode = {
  /**
   * Chinook
   */
  Chinook: "1114-8",

  /**
   * Clatsop
   */
  Clatsop: "1115-5",

  /**
   * Columbia River Chinook
   */
  ColumbiaRiverChinook: "1116-3",

  /**
   * Kathlamet
   */
  Kathlamet: "1117-1",

  /**
   * Upper Chinook
   */
  UpperChinook: "1118-9",

  /**
   * Wakiakum Chinook
   */
  WakiakumChinook: "1119-7",

  /**
   * Willapa Chinook
   */
  WillapaChinook: "1120-5",

  /**
   * Wishram
   */
  Wishram: "1121-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChinookCode =
  typeof RaceAmericanIndianChinookCode[keyof typeof RaceAmericanIndianChinookCode];
