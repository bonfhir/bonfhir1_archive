/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceWhiteMiddleEast
 */
export const RaceWhiteMiddleEastCode = {
  /**
   * Middle Eastern or North African
   */
  MiddleEasternorNorthAfrican: "2118-8",

  /**
   * Assyrian
   */
  Assyrian: "2119-6",

  /**
   * Egyptian
   */
  Egyptian: "2120-4",

  /**
   * Iranian
   */
  Iranian: "2121-2",

  /**
   * Iraqi
   */
  Iraqi: "2122-0",

  /**
   * Lebanese
   */
  Lebanese: "2123-8",

  /**
   * Palestinian
   */
  Palestinian: "2124-6",

  /**
   * Syrian
   */
  Syrian: "2125-3",

  /**
   * Afghanistani
   */
  Afghanistani: "2126-1",

  /**
   * Israeili
   */
  Israeili: "2127-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceWhiteMiddleEastCode =
  typeof RaceWhiteMiddleEastCode[keyof typeof RaceWhiteMiddleEastCode];
