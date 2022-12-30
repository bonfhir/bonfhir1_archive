/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TopicalSolution
 */
export const TopicalSolutionCode = {
  /**
   * Topical Solution
   */
  TOPSOL: "TOPSOL",

  /**
   * Liniment
   */
  LIN: "LIN",

  /**
   * Mucous Membrane Topical Solution
   */
  MUCTOPSOL: "MUCTOPSOL",

  /**
   * Tincture
   */
  TINC: "TINC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TopicalSolutionCode =
  typeof TopicalSolutionCode[keyof typeof TopicalSolutionCode];
