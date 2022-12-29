/**
 * Value Set of codes that identify the time span of a report or the reason for a report sent to a regulatory agency.
 * http://terminology.hl7.org/ValueSet/v2-0234
 */
export const Hl7VSReportTimingCode = {
  /**
   * Correction
   */
  Correction: "CO",

  /**
   * Additional information
   */
  Additionalinformation: "AD",

  /**
   * Requested information
   */
  Requestedinformation: "RQ",

  /**
   * Device evaluation
   */
  Deviceevaluation: "DE",

  /**
   * Periodic
   */
  Periodic: "PD",

  /**
   * 3 day report
   */
  Threedayreport: "3D",

  /**
   * 7 day report
   */
  Sevendayreport: "7D",

  /**
   * 10 day report
   */
  Tendayreport: "10D",

  /**
   * 15 day report
   */
  Fifteendayreport: "15D",

  /**
   * 30 day report
   */
  Thirtydayreport: "30D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReportTimingCode =
  typeof Hl7VSReportTimingCode[keyof typeof Hl7VSReportTimingCode];
