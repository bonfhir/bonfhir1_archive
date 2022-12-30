/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceWhite
 */
export const RaceWhiteCode = {
  /**
   * White
   */
  "2106-3": "2106-3",

  /**
   * European
   */
  "2108-9": "2108-9",

  /**
   * Armenian
   */
  "2109-7": "2109-7",

  /**
   * English
   */
  "2110-5": "2110-5",

  /**
   * French
   */
  "2111-3": "2111-3",

  /**
   * German
   */
  "2112-1": "2112-1",

  /**
   * Irish
   */
  "2113-9": "2113-9",

  /**
   * Italian
   */
  "2114-7": "2114-7",

  /**
   * Polish
   */
  "2115-4": "2115-4",

  /**
   * Scottish
   */
  "2116-2": "2116-2",

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

  /**
   * Arab
   */
  "2129-5": "2129-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceWhiteCode = typeof RaceWhiteCode[keyof typeof RaceWhiteCode];
