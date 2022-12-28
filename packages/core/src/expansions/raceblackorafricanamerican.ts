/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceBlackOrAfricanAmerican
 */
export const RaceBlackOrAfricanAmericanCode = {
  /**
   * Black or African American
   */
  "2054-5": "2054-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceBlackOrAfricanAmericanCode =
  typeof RaceBlackOrAfricanAmericanCode[keyof typeof RaceBlackOrAfricanAmericanCode];
