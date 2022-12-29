/**
 * Value Set of codes identifying the timing and grouping of the response message(s).
 * http://terminology.hl7.org/ValueSet/v2-0394
 */
export const Hl7VSResponseModalityCode = {
  /**
   * Real Time
   */
  RealTime: "R",

  /**
   * Bolus (a series of responses sent at the same time without use of batch formatting)
   */
  Bolusaseriesofresponsessentatthesametimewithoutuseofbatchformatting: "T",

  /**
   * Batch
   */
  Batch: "B",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSResponseModalityCode =
  typeof Hl7VSResponseModalityCode[keyof typeof Hl7VSResponseModalityCode];
