/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianShawnee
 */
export const RaceAmericanIndianShawneeCode = {
  /**
   * Shawnee
   */
  Shawnee: "1578-4",

  /**
   * Absentee Shawnee
   */
  AbsenteeShawnee: "1579-2",

  /**
   * Eastern Shawnee
   */
  EasternShawnee: "1580-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianShawneeCode =
  typeof RaceAmericanIndianShawneeCode[keyof typeof RaceAmericanIndianShawneeCode];
