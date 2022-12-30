/**
 * Indicates the type of use for which the code is defined.
 * http://terminology.hl7.org/ValueSet/composition-altcode-kind
 */
export const AlternativeCodeKindCode = {
  /**
   * Alternate Code
   */
  alternate: "alternate",

  /**
   * Deprecated
   */
  deprecated: "deprecated",

  /**
   * Case Insensitive
   */
  "case-insensitive": "case-insensitive",

  /**
   * Case Sensitive
   */
  "case-sensitive": "case-sensitive",

  /**
   * Expression
   */
  expression: "expression",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AlternativeCodeKindCode =
  typeof AlternativeCodeKindCode[keyof typeof AlternativeCodeKindCode];
