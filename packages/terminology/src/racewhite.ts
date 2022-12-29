/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceWhite
 */
export const RaceWhiteCode = {
  /**
   * White
   */
  White: "2106-3",

  /**
   * European
   */
  European: "2108-9",

  /**
   * Armenian
   */
  Armenian: "2109-7",

  /**
   * English
   */
  English: "2110-5",

  /**
   * French
   */
  French: "2111-3",

  /**
   * German
   */
  German: "2112-1",

  /**
   * Irish
   */
  Irish: "2113-9",

  /**
   * Italian
   */
  Italian: "2114-7",

  /**
   * Polish
   */
  Polish: "2115-4",

  /**
   * Scottish
   */
  Scottish: "2116-2",

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

  /**
   * Arab
   */
  Arab: "2129-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceWhiteCode = typeof RaceWhiteCode[keyof typeof RaceWhiteCode];
