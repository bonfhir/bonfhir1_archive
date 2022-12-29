/**
 * Identifies common relational operators used in selection criteria.
 * http://terminology.hl7.org/ValueSet/v3-RelationalOperator
 */
export const RelationalOperatorCode = {
  /**
   * Contains
   */
  Contains: "CT",

  /**
   * Equal
   */
  Equal: "EQ",

  /**
   * Greater than or equal
   */
  Greaterthanorequal: "GE",

  /**
   * Generic
   */
  Generic: "GN",

  /**
   * Greater than
   */
  Greaterthan: "GT",

  /**
   * Less than or equal
   */
  Lessthanorequal: "LE",

  /**
   * Less than
   */
  Lessthan: "LT",

  /**
   * Not Equal
   */
  NotEqual: "NE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RelationalOperatorCode =
  typeof RelationalOperatorCode[keyof typeof RelationalOperatorCode];
