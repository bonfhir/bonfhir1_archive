/**
 * The kind of dose or rate specified.
 * http://terminology.hl7.org/ValueSet/dose-rate-type
 */
export const DoseAndRateTypeCode = {
  /**
   * Calculated
   */
  calculated: "calculated",

  /**
   * Ordered
   */
  ordered: "ordered",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseAndRateTypeCode =
  typeof DoseAndRateTypeCode[keyof typeof DoseAndRateTypeCode];
