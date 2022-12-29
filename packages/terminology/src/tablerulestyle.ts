/**
 * (abstract) Defines table cell rendering characteristics
 * http://terminology.hl7.org/ValueSet/v3-TableRuleStyle
 */
export const TableRuleStyleCode = {
  /**
   * Table Rule Style
   */
  TableRuleStyle: "_TableRuleStyle",

  /**
   * Bottom Rule
   */
  BottomRule: "Botrule",

  /**
   * Left-sided rule
   */
  Leftsidedrule: "Lrule",

  /**
   * Right-sided rule
   */
  Rightsidedrule: "Rrule",

  /**
   * Top Rule
   */
  TopRule: "Toprule",

  /**
   * Top Rule
   */
  TopRule: "TORULE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TableRuleStyleCode =
  typeof TableRuleStyleCode[keyof typeof TableRuleStyleCode];
