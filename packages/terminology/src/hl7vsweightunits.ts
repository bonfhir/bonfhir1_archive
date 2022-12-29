/**
 * Value Set of codes of units of measure that are used to specify weight.
 * http://terminology.hl7.org/ValueSet/v2-0929
 */
export const Hl7VSWeightUnitsCode = {
  /**
   * [lb_av]
   */
  lb_av: "[lb_av]",

  /**
   * [oz_av]
   */
  oz_av: "[oz_av]",

  /**
   * kg
   */
  kg: "kg",

  /**
   * g
   */
  g: "g",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSWeightUnitsCode =
  typeof Hl7VSWeightUnitsCode[keyof typeof Hl7VSWeightUnitsCode];
