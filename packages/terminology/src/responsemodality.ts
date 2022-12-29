/**
 * Defines the timing and grouping of the response instances.
 * http://terminology.hl7.org/ValueSet/v3-ResponseModality
 */
export const ResponseModalityCode = {
  /**
   * Batch
   */
  Batch: "B",

  /**
   * Real Time
   */
  RealTime: "R",

  /**
   * Bolus
   */
  Bolus: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResponseModalityCode =
  typeof ResponseModalityCode[keyof typeof ResponseModalityCode];
