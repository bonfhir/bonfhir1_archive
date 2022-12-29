/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianWashoe
 */
export const RaceAmericanIndianWashoeCode = {
  /**
   * Washoe
   */
  Washoe: "1687-3",

  /**
   * Alpine
   */
  Alpine: "1688-1",

  /**
   * Carson
   */
  Carson: "1689-9",

  /**
   * Dresslerville
   */
  Dresslerville: "1690-7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianWashoeCode =
  typeof RaceAmericanIndianWashoeCode[keyof typeof RaceAmericanIndianWashoeCode];
