/**
 * Indicates the type of use for which the code is defined.
 * http://terminology.hl7.org/ValueSet/composition-altcode-kind
 */
export const AlternativeCodeKindCode = {
  /**
   * Alternate Code
   */
  AlternateCode: "alternate",

  /**
   * Deprecated
   */
  Deprecated: "deprecated",

  /**
   * Case Insensitive
   */
  CaseInsensitive: "case-insensitive",

  /**
   * Case Sensitive
   */
  CaseSensitive: "case-sensitive",

  /**
   * Expression
   */
  Expression: "expression",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AlternativeCodeKindCode =
  typeof AlternativeCodeKindCode[keyof typeof AlternativeCodeKindCode];
