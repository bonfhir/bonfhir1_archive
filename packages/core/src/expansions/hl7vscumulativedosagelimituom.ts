/**
 * Value Set of codes specifying the unit of measure (UoM) for the cumulative dosage limit.
 * http://terminology.hl7.org/ValueSet/v2-0924
 */
export const Hl7VSCumulativeDosageLimitUomCode = {
  /**
   * Annual
   */
  A: "A",

  /**
   * Per Day
   */
  D: "D",

  /**
   * Per Month
   */
  M: "M",

  /**
   * Duration of the Order
   */
  O: "O",

  /**
   * Patients Lifetime
   */
  PL: "PL",

  /**
   * Per Week
   */
  WK: "WK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCumulativeDosageLimitUomCode =
  typeof Hl7VSCumulativeDosageLimitUomCode[keyof typeof Hl7VSCumulativeDosageLimitUomCode];
