/**
 * These values are defined within the XHTML 4.0 Table Model
 * http://terminology.hl7.org/ValueSet/v3-TableCellHorizontalAlign
 */
export const TableCellHorizontalAlignCode = {
  /**
   * center
   */
  center: "center",

  /**
   * char
   */
  char: "char",

  /**
   * justify
   */
  justify: "justify",

  /**
   * left
   */
  left: "left",

  /**
   * right
   */
  right: "right",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TableCellHorizontalAlignCode =
  typeof TableCellHorizontalAlignCode[keyof typeof TableCellHorizontalAlignCode];
