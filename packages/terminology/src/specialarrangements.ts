/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 * http://terminology.hl7.org/ValueSet/encounter-special-arrangements
 */
export const SpecialArrangementsCode = {
  /**
   * Wheelchair
   */
  Wheelchair: "wheel",

  /**
   * Additional bedding
   */
  Additionalbedding: "add-bed",

  /**
   * Interpreter
   */
  Interpreter: "int",

  /**
   * Attendant
   */
  Attendant: "att",

  /**
   * Guide dog
   */
  Guidedog: "dog",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecialArrangementsCode =
  typeof SpecialArrangementsCode[keyof typeof SpecialArrangementsCode];
