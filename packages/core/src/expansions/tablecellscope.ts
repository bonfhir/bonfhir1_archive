/**
 * These values are defined within the XHTML 4.0 Table Model
 * http://terminology.hl7.org/ValueSet/v3-TableCellScope
 */
export const TableCellScopeCode = {
  /**
   * col
   */
  col: "col",

  /**
   * colgroup
   */
  colgroup: "colgroup",

  /**
   * row
   */
  row: "row",

  /**
   * rowgroup
   */
  rowgroup: "rowgroup",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TableCellScopeCode =
  typeof TableCellScopeCode[keyof typeof TableCellScopeCode];
