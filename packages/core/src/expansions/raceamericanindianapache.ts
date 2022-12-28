/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianApache
 */
export const RaceAmericanIndianApacheCode = {
  /**
   * Apache
   */
  "1010-8": "1010-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianApacheCode =
  typeof RaceAmericanIndianApacheCode[keyof typeof RaceAmericanIndianApacheCode];
