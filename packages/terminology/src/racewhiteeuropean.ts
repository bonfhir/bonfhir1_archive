/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceWhiteEuropean
 */
export const RaceWhiteEuropeanCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceWhiteEuropeanCode =
  typeof RaceWhiteEuropeanCode[keyof typeof RaceWhiteEuropeanCode];
