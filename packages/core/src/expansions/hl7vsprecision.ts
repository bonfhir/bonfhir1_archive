/**
 * Value Set of codes used to specify the degree of precision of a time stamp.
 * http://terminology.hl7.org/ValueSet/v2-0529
 */
export const Hl7VSPrecisionCode = {
  /**
   * year
   */
  Y: "Y",

  /**
   * month
   */
  L: "L",

  /**
   * day
   */
  D: "D",

  /**
   * hour
   */
  H: "H",

  /**
   * minute
   */
  M: "M",

  /**
   * second
   */
  S: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPrecisionCode =
  typeof Hl7VSPrecisionCode[keyof typeof Hl7VSPrecisionCode];
