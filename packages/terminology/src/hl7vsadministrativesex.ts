/**
 * Concepts specifying a patient's sex for administrative purposes.
 * http://terminology.hl7.org/ValueSet/v2-0001
 */
export const Hl7VSAdministrativeSexCode = {
  /**
   * Female
   */
  Female: "F",

  /**
   * Male
   */
  Male: "M",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",

  /**
   * Ambiguous
   */
  Ambiguous: "A",

  /**
   * Not applicable
   */
  Notapplicable: "N",

  /**
   * Non-Binary
   */
  NonBinary: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdministrativeSexCode =
  typeof Hl7VSAdministrativeSexCode[keyof typeof Hl7VSAdministrativeSexCode];
