/**
 * Value Set of codes that define the relationship between HL7 segment field names identified in a query construct.
 * http://terminology.hl7.org/ValueSet/v2-0209
 */
export const Hl7VSRelationalOperatorCode = {
  /**
   * Equal
   */
  EQ: "EQ",

  /**
   * Not Equal
   */
  NE: "NE",

  /**
   * Less than
   */
  LT: "LT",

  /**
   * Greater than
   */
  GT: "GT",

  /**
   * Less than or equal
   */
  LE: "LE",

  /**
   * Greater than or equal
   */
  GE: "GE",

  /**
   * Contains
   */
  CT: "CT",

  /**
   * Generic
   */
  GN: "GN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationalOperatorCode =
  typeof Hl7VSRelationalOperatorCode[keyof typeof Hl7VSRelationalOperatorCode];
