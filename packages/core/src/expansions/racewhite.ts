/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceWhite
 */
export const RaceWhiteCode = {
  /**
   * White
   */
  "2106-3": "2106-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceWhiteCode = typeof RaceWhiteCode[keyof typeof RaceWhiteCode];
