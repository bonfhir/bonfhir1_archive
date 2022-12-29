/**
 * These values are defined within the XHTML 4.0 Table Model
 * http://terminology.hl7.org/ValueSet/v3-TableFrame
 */
export const TableFrameCode = {
  /**
   * above
   */
  above: "above",

  /**
   * below
   */
  below: "below",

  /**
   * border
   */
  border: "border",

  /**
   * box
   */
  box: "box",

  /**
   * hsides
   */
  hsides: "hsides",

  /**
   * lhs
   */
  lhs: "lhs",

  /**
   * rhs
   */
  rhs: "rhs",

  /**
   * void
   */
  void: "void",

  /**
   * vsides
   */
  vsides: "vsides",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TableFrameCode = typeof TableFrameCode[keyof typeof TableFrameCode];
