/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanicSouthAmerican
 */
export const EthnicityHispanicSouthAmericanCode = {
  /**
   * South American
   */
  "2165-9": "2165-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicSouthAmericanCode =
  typeof EthnicityHispanicSouthAmericanCode[keyof typeof EthnicityHispanicSouthAmericanCode];
