/**
 * (abstract) Defines table cell rendering characteristics
 * http://terminology.hl7.org/ValueSet/v3-TableRuleStyle
 */
export const TableRuleStyleCode = {
  /**
   * Table Rule Style
   */
  _TableRuleStyle: "_TableRuleStyle",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TableRuleStyleCode =
  typeof TableRuleStyleCode[keyof typeof TableRuleStyleCode];
