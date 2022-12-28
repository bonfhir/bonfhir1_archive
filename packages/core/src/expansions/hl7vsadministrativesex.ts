/**
 * Concepts specifying a patient's sex for administrative purposes.
 * http://terminology.hl7.org/ValueSet/v2-0001
 */
export const Hl7VSAdministrativeSexCode = {
  /**
   * Female
   */
  F: "F",

  /**
   * Male
   */
  M: "M",

  /**
   * Other
   */
  O: "O",

  /**
   * Unknown
   */
  U: "U",

  /**
   * Ambiguous
   */
  A: "A",

  /**
   * Not applicable
   */
  N: "N",

  /**
   * Non-Binary
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdministrativeSexCode =
  typeof Hl7VSAdministrativeSexCode[keyof typeof Hl7VSAdministrativeSexCode];
