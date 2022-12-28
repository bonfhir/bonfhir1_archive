/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceWhiteEuropean
 */
export const RaceWhiteEuropeanCode = {
  /**
   * European
   */
  "2108-9": "2108-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceWhiteEuropeanCode =
  typeof RaceWhiteEuropeanCode[keyof typeof RaceWhiteEuropeanCode];
