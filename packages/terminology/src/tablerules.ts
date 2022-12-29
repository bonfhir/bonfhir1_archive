/**
 * These values are defined within the XHTML 4.0 Table Model
 * http://terminology.hl7.org/ValueSet/v3-TableRules
 */
export const TableRulesCode = {
  /**
   * all
   */
  all: "all",

  /**
   * cols
   */
  cols: "cols",

  /**
   * groups
   */
  groups: "groups",

  /**
   * none
   */
  none: "none",

  /**
   * rows
   */
  rows: "rows",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TableRulesCode = typeof TableRulesCode[keyof typeof TableRulesCode];
