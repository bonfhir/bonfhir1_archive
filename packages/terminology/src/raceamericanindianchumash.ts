/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChumash
 */
export const RaceAmericanIndianChumashCode = {
  /**
   * Chumash
   */
  "1162-7": "1162-7",

  /**
   * Santa Ynez
   */
  "1163-5": "1163-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChumashCode =
  typeof RaceAmericanIndianChumashCode[keyof typeof RaceAmericanIndianChumashCode];
