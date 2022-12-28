/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralSolution
 */
export const OralSolutionCode = {
  /**
   * Oral Solution
   */
  ORALSOL: "ORALSOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralSolutionCode =
  typeof OralSolutionCode[keyof typeof OralSolutionCode];
