/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianUte
 */
export const RaceAmericanIndianUteCode = {
  /**
   * Ute
   */
  Ute: "1670-9",

  /**
   * Allen Canyon
   */
  AllenCanyon: "1671-7",

  /**
   * Uintah Ute
   */
  UintahUte: "1672-5",

  /**
   * Ute Mountain Ute
   */
  UteMountainUte: "1673-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianUteCode =
  typeof RaceAmericanIndianUteCode[keyof typeof RaceAmericanIndianUteCode];
