/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCupeno
 */
export const RaceAmericanIndianCupenoCode = {
  /**
   * Cupeno
   */
  "1211-2": "1211-2",

  /**
   * Agua Caliente
   */
  "1212-0": "1212-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCupenoCode =
  typeof RaceAmericanIndianCupenoCode[keyof typeof RaceAmericanIndianCupenoCode];
