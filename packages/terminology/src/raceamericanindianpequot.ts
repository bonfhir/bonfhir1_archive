/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPequot
 */
export const RaceAmericanIndianPequotCode = {
  /**
   * Pequot
   */
  "1453-0": "1453-0",

  /**
   * Marshantucket Pequot
   */
  "1454-8": "1454-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPequotCode =
  typeof RaceAmericanIndianPequotCode[keyof typeof RaceAmericanIndianPequotCode];
