/**
 * These values are defined within the XHTML 4.0 Table Model
 * http://terminology.hl7.org/ValueSet/v3-TableCellVerticalAlign
 */
export const TableCellVerticalAlignCode = {
  /**
   * baseline
   */
  baseline: "baseline",

  /**
   * bottom
   */
  bottom: "bottom",

  /**
   * middle
   */
  middle: "middle",

  /**
   * top
   */
  top: "top",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TableCellVerticalAlignCode =
  typeof TableCellVerticalAlignCode[keyof typeof TableCellVerticalAlignCode];
