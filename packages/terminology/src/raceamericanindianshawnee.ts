/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianShawnee
 */
export const RaceAmericanIndianShawneeCode = {
  /**
   * Shawnee
   */
  "1578-4": "1578-4",

  /**
   * Absentee Shawnee
   */
  "1579-2": "1579-2",

  /**
   * Eastern Shawnee
   */
  "1580-0": "1580-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianShawneeCode =
  typeof RaceAmericanIndianShawneeCode[keyof typeof RaceAmericanIndianShawneeCode];
