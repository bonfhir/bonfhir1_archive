/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TopicalSolution
 */
export const TopicalSolutionCode = {
  /**
   * Topical Solution
   */
  TopicalSolution: "TOPSOL",

  /**
   * Liniment
   */
  Liniment: "LIN",

  /**
   * Mucous Membrane Topical Solution
   */
  MucousMembraneTopicalSolution: "MUCTOPSOL",

  /**
   * Tincture
   */
  Tincture: "TINC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TopicalSolutionCode =
  typeof TopicalSolutionCode[keyof typeof TopicalSolutionCode];
