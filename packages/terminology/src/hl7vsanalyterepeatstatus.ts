/**
 * Value Set of codes identifying the repeat status for the analyte/result (e.g. original, rerun, repeat, reflex).  The following are assumptions regarding the table values: Repeated without dilution — performed usually to confirm correctness of r
 * http://terminology.hl7.org/ValueSet/v2-0389
 */
export const Hl7VSAnalyteRepeatStatusCode = {
  /**
   * Original, first run
   */
  O: "O",

  /**
   * Repeated without dilution
   */
  R: "R",

  /**
   * Repeated with dilution
   */
  D: "D",

  /**
   * Reflex test
   */
  F: "F",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAnalyteRepeatStatusCode =
  typeof Hl7VSAnalyteRepeatStatusCode[keyof typeof Hl7VSAnalyteRepeatStatusCode];
