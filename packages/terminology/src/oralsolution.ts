/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralSolution
 */
export const OralSolutionCode = {
  /**
   * Oral Solution
   */
  ORALSOL: "ORALSOL",

  /**
   * Oral Drops
   */
  ORDROP: "ORDROP",

  /**
   * Elixir
   */
  ELIXIR: "ELIXIR",

  /**
   * Mouthwash/Rinse
   */
  RINSE: "RINSE",

  /**
   * Syrup
   */
  SYRUP: "SYRUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralSolutionCode =
  typeof OralSolutionCode[keyof typeof OralSolutionCode];
