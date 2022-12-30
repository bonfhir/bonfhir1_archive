/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceWhiteEuropean
 */
export const RaceWhiteEuropeanCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceWhiteEuropeanCode =
  typeof RaceWhiteEuropeanCode[keyof typeof RaceWhiteEuropeanCode];
