/**
 * **Definition:** Living arrangements lacking a permanent residence.
 * http://terminology.hl7.org/ValueSet/v3-Homeless
 */
export const HomelessCode = {
  /**
   * homeless
   */
  HL: "HL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HomelessCode = typeof HomelessCode[keyof typeof HomelessCode];
