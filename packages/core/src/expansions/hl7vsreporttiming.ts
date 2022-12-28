/**
 * Value Set of codes that identify the time span of a report or the reason for a report sent to a regulatory agency.
 * http://terminology.hl7.org/ValueSet/v2-0234
 */
export const Hl7VSReportTimingCode = {
  /**
   * Correction
   */
  CO: "CO",

  /**
   * Additional information
   */
  AD: "AD",

  /**
   * Requested information
   */
  RQ: "RQ",

  /**
   * Device evaluation
   */
  DE: "DE",

  /**
   * Periodic
   */
  PD: "PD",

  /**
   * 3 day report
   */
  "3D": "3D",

  /**
   * 7 day report
   */
  "7D": "7D",

  /**
   * 10 day report
   */
  "10D": "10D",

  /**
   * 15 day report
   */
  "15D": "15D",

  /**
   * 30 day report
   */
  "30D": "30D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReportTimingCode =
  typeof Hl7VSReportTimingCode[keyof typeof Hl7VSReportTimingCode];
