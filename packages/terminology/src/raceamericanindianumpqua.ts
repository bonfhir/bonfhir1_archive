/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianUmpqua
 */
export const RaceAmericanIndianUmpquaCode = {
  /**
   * Umpqua
   */
  "1667-5": "1667-5",

  /**
   * Cow Creek Umpqua
   */
  "1668-3": "1668-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianUmpquaCode =
  typeof RaceAmericanIndianUmpquaCode[keyof typeof RaceAmericanIndianUmpquaCode];
