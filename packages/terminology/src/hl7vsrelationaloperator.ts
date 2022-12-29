/**
 * Value Set of codes that define the relationship between HL7 segment field names identified in a query construct.
 * http://terminology.hl7.org/ValueSet/v2-0209
 */
export const Hl7VSRelationalOperatorCode = {
  /**
   * Equal
   */
  Equal: "EQ",

  /**
   * Not Equal
   */
  NotEqual: "NE",

  /**
   * Less than
   */
  Lessthan: "LT",

  /**
   * Greater than
   */
  Greaterthan: "GT",

  /**
   * Less than or equal
   */
  Lessthanorequal: "LE",

  /**
   * Greater than or equal
   */
  Greaterthanorequal: "GE",

  /**
   * Contains
   */
  Contains: "CT",

  /**
   * Generic
   */
  Generic: "GN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationalOperatorCode =
  typeof Hl7VSRelationalOperatorCode[keyof typeof Hl7VSRelationalOperatorCode];
