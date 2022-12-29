/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralSolution
 */
export const OralSolutionCode = {
  /**
   * Oral Solution
   */
  OralSolution: "ORALSOL",

  /**
   * Oral Drops
   */
  OralDrops: "ORDROP",

  /**
   * Elixir
   */
  Elixir: "ELIXIR",

  /**
   * Mouthwash/Rinse
   */
  MouthwashRinse: "RINSE",

  /**
   * Syrup
   */
  Syrup: "SYRUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralSolutionCode =
  typeof OralSolutionCode[keyof typeof OralSolutionCode];
