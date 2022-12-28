/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndian
 */
export const RaceAmericanIndianCode = {
  /**
   * American Indian
   */
  "1004-1": "1004-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCode =
  typeof RaceAmericanIndianCode[keyof typeof RaceAmericanIndianCode];
