/**
 * Value Set of codes that specify the adjustment quantity.
 * http://terminology.hl7.org/ValueSet/v2-0560
 */
export const Hl7VSQuantityUnitsCode = {
  /**
   * Units
   */
  FL: "FL",

  /**
   * Days
   */
  DY: "DY",

  /**
   * Hours
   */
  HS: "HS",

  /**
   * Month
   */
  MN: "MN",

  /**
   * Years
   */
  YY: "YY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSQuantityUnitsCode =
  typeof Hl7VSQuantityUnitsCode[keyof typeof Hl7VSQuantityUnitsCode];
