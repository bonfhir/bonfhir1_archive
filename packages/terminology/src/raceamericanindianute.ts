/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianUte
 */
export const RaceAmericanIndianUteCode = {
  /**
   * Ute
   */
  "1670-9": "1670-9",

  /**
   * Allen Canyon
   */
  "1671-7": "1671-7",

  /**
   * Uintah Ute
   */
  "1672-5": "1672-5",

  /**
   * Ute Mountain Ute
   */
  "1673-3": "1673-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianUteCode =
  typeof RaceAmericanIndianUteCode[keyof typeof RaceAmericanIndianUteCode];
