/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ContextConductionStyle
 */
export const ContextConductionStyleCode = {
  /**
   * conduction-indicator-based
   */
  C: "C",

  /**
   * inferred
   */
  I: "I",

  /**
   * vocabulary-based
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextConductionStyleCode =
  typeof ContextConductionStyleCode[keyof typeof ContextConductionStyleCode];
