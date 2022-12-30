/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChickahominy
 */
export const RaceAmericanIndianChickahominyCode = {
  /**
   * Chickahominy
   */
  "1108-0": "1108-0",

  /**
   * Eastern Chickahominy
   */
  "1109-8": "1109-8",

  /**
   * Western Chickahominy
   */
  "1110-6": "1110-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChickahominyCode =
  typeof RaceAmericanIndianChickahominyCode[keyof typeof RaceAmericanIndianChickahominyCode];
