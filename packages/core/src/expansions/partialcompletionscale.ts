/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PartialCompletionScale
 */
export const PartialCompletionScaleCode = {
  /**
   * Great extent
   */
  G: "G",

  /**
   * Large extent
   */
  LE: "LE",

  /**
   * Medium extent
   */
  ME: "ME",

  /**
   * Minimal extent
   */
  MI: "MI",

  /**
   * None
   */
  N: "N",

  /**
   * Some extent
   */
  S: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PartialCompletionScaleCode =
  typeof PartialCompletionScaleCode[keyof typeof PartialCompletionScaleCode];
