/**
 * Value Set of codes specifying the units of donation duration.
 * http://terminology.hl7.org/ValueSet/v2-0932
 */
export const Hl7VSDonationDurationUnitsCode = {
  /**
   * Minutes
   */
  Minutes: "min",

  /**
   * Seconds
   */
  Seconds: "s",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDonationDurationUnitsCode =
  typeof Hl7VSDonationDurationUnitsCode[keyof typeof Hl7VSDonationDurationUnitsCode];
