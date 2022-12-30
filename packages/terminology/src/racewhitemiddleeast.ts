/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceWhiteMiddleEast
 */
export const RaceWhiteMiddleEastCode = {
  /**
   * Middle Eastern or North African
   */
  "2118-8": "2118-8",

  /**
   * Assyrian
   */
  "2119-6": "2119-6",

  /**
   * Egyptian
   */
  "2120-4": "2120-4",

  /**
   * Iranian
   */
  "2121-2": "2121-2",

  /**
   * Iraqi
   */
  "2122-0": "2122-0",

  /**
   * Lebanese
   */
  "2123-8": "2123-8",

  /**
   * Palestinian
   */
  "2124-6": "2124-6",

  /**
   * Syrian
   */
  "2125-3": "2125-3",

  /**
   * Afghanistani
   */
  "2126-1": "2126-1",

  /**
   * Israeili
   */
  "2127-9": "2127-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceWhiteMiddleEastCode =
  typeof RaceWhiteMiddleEastCode[keyof typeof RaceWhiteMiddleEastCode];
