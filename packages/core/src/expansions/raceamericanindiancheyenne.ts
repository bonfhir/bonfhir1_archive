/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCheyenne
 */
export const RaceAmericanIndianCheyenneCode = {
  /**
   * Cheyenne
   */
  "1102-3": "1102-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCheyenneCode =
  typeof RaceAmericanIndianCheyenneCode[keyof typeof RaceAmericanIndianCheyenneCode];
