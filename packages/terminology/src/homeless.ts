/**
 * **Definition:** Living arrangements lacking a permanent residence.
 * http://terminology.hl7.org/ValueSet/v3-Homeless
 */
export const HomelessCode = {
  /**
   * homeless
   */
  homeless: "HL",

  /**
   * Nomadic
   */
  Nomadic: "M",

  /**
   * Transient
   */
  Transient: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HomelessCode = typeof HomelessCode[keyof typeof HomelessCode];
