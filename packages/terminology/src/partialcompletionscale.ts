/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PartialCompletionScale
 */
export const PartialCompletionScaleCode = {
  /**
   * Great extent
   */
  Greatextent: "G",

  /**
   * Large extent
   */
  Largeextent: "LE",

  /**
   * Medium extent
   */
  Mediumextent: "ME",

  /**
   * Minimal extent
   */
  Minimalextent: "MI",

  /**
   * None
   */
  None: "N",

  /**
   * Some extent
   */
  Someextent: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PartialCompletionScaleCode =
  typeof PartialCompletionScaleCode[keyof typeof PartialCompletionScaleCode];
