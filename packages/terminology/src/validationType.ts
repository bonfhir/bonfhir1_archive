/**
 * What the target is validated against
 * http://terminology.hl7.org/ValueSet/verificationresult-validation-type
 */
export const Validation_typeCode = {
  /**
   * Nothing
   */
  Nothing: "nothing",

  /**
   * Primary Source
   */
  PrimarySource: "primary",

  /**
   * Multiple Sources
   */
  MultipleSources: "multiple",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Validation_typeCode =
  typeof Validation_typeCode[keyof typeof Validation_typeCode];
