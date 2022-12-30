/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPawnee
 */
export const RaceAmericanIndianPawneeCode = {
  /**
   * Pawnee
   */
  "1445-6": "1445-6",

  /**
   * Oklahoma Pawnee
   */
  "1446-4": "1446-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPawneeCode =
  typeof RaceAmericanIndianPawneeCode[keyof typeof RaceAmericanIndianPawneeCode];
