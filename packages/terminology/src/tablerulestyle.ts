/**
 * (abstract) Defines table cell rendering characteristics
 * http://terminology.hl7.org/ValueSet/v3-TableRuleStyle
 */
export const TableRuleStyleCode = {
  /**
   * Table Rule Style
   */
  _TableRuleStyle: "_TableRuleStyle",

  /**
   * Bottom Rule
   */
  Botrule: "Botrule",

  /**
   * Left-sided rule
   */
  Lrule: "Lrule",

  /**
   * Right-sided rule
   */
  Rrule: "Rrule",

  /**
   * Top Rule
   */
  Toprule: "Toprule",

  /**
   * Top Rule
   */
  TORULE: "TORULE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TableRuleStyleCode =
  typeof TableRuleStyleCode[keyof typeof TableRuleStyleCode];
