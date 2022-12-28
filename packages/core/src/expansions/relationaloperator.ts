/**
 * Identifies common relational operators used in selection criteria.
 * http://terminology.hl7.org/ValueSet/v3-RelationalOperator
 */
export const RelationalOperatorCode = {
  /**
   * Contains
   */
  CT: "CT",

  /**
   * Equal
   */
  EQ: "EQ",

  /**
   * Greater than or equal
   */
  GE: "GE",

  /**
   * Generic
   */
  GN: "GN",

  /**
   * Greater than
   */
  GT: "GT",

  /**
   * Less than or equal
   */
  LE: "LE",

  /**
   * Less than
   */
  LT: "LT",

  /**
   * Not Equal
   */
  NE: "NE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RelationalOperatorCode =
  typeof RelationalOperatorCode[keyof typeof RelationalOperatorCode];
