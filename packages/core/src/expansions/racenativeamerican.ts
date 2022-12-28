/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceNativeAmerican
 */
export const RaceNativeAmericanCode = {
  /**
   * American Indian or Alaska Native
   */
  "1002-5": "1002-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceNativeAmericanCode =
  typeof RaceNativeAmericanCode[keyof typeof RaceNativeAmericanCode];
