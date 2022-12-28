/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCalifornia
 */
export const RaceAmericanIndianCaliforniaCode = {
  /**
   * California Tribes
   */
  "1053-8": "1053-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCaliforniaCode =
  typeof RaceAmericanIndianCaliforniaCode[keyof typeof RaceAmericanIndianCaliforniaCode];
