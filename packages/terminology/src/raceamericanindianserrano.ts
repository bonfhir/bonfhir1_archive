/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianSerrano
 */
export const RaceAmericanIndianSerranoCode = {
  /**
   * Serrano
   */
  Serrano: "1573-5",

  /**
   * San Manual
   */
  SanManual: "1574-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianSerranoCode =
  typeof RaceAmericanIndianSerranoCode[keyof typeof RaceAmericanIndianSerranoCode];
