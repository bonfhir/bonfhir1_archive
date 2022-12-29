/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChippewaCree
 */
export const RaceAmericanIndianChippewaCreeCode = {
  /**
   * Chippewa Cree
   */
  ChippewaCree: "1150-2",

  /**
   * Rocky Boy's Chippewa Cree
   */
  RockyBoysChippewaCree: "1151-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChippewaCreeCode =
  typeof RaceAmericanIndianChippewaCreeCode[keyof typeof RaceAmericanIndianChippewaCreeCode];
