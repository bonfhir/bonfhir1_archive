/**
 * Value Set of codes that specify that a second timing specification is to follow using the repeat delimiter.
 * http://terminology.hl7.org/ValueSet/v2-0472
 */
export const Hl7VSTqConjunctionIdCode = {
  /**
   * Synchronous
   */
  S: "S",

  /**
   * Asynchronous
   */
  A: "A",

  /**
   * Actuation Time
   */
  C: "C",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTqConjunctionIdCode =
  typeof Hl7VSTqConjunctionIdCode[keyof typeof Hl7VSTqConjunctionIdCode];
