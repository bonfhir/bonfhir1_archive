/**
 * Value Set of codes specifying the unit of measure (UoM) for the cumulative dosage limit.
 * http://terminology.hl7.org/ValueSet/v2-0924
 */
export const Hl7VSCumulativeDosageLimitUomCode = {
  /**
   * Annual
   */
  Annual: "A",

  /**
   * Per Day
   */
  PerDay: "D",

  /**
   * Per Month
   */
  PerMonth: "M",

  /**
   * Duration of the Order
   */
  DurationoftheOrder: "O",

  /**
   * Patients Lifetime
   */
  PatientsLifetime: "PL",

  /**
   * Per Week
   */
  PerWeek: "WK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCumulativeDosageLimitUomCode =
  typeof Hl7VSCumulativeDosageLimitUomCode[keyof typeof Hl7VSCumulativeDosageLimitUomCode];
