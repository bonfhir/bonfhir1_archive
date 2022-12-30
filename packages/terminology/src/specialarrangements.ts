/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 * http://terminology.hl7.org/ValueSet/encounter-special-arrangements
 */
export const SpecialArrangementsCode = {
  /**
   * Wheelchair
   */
  wheel: "wheel",

  /**
   * Additional bedding
   */
  "add-bed": "add-bed",

  /**
   * Interpreter
   */
  int: "int",

  /**
   * Attendant
   */
  att: "att",

  /**
   * Guide dog
   */
  dog: "dog",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecialArrangementsCode =
  typeof SpecialArrangementsCode[keyof typeof SpecialArrangementsCode];
