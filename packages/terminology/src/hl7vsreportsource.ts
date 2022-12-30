/**
 * Value Set of codes that identify where a report sender learned about an event.
 * http://terminology.hl7.org/ValueSet/v2-0235
 */
export const Hl7VSReportSourceCode = {
  /**
   * Clinical trial
   */
  C: "C",

  /**
   * Literature
   */
  L: "L",

  /**
   * Health professional
   */
  H: "H",

  /**
   * Regulatory agency
   */
  R: "R",

  /**
   * Database/registry/poison control center
   */
  D: "D",

  /**
   * Non-healthcare professional
   */
  N: "N",

  /**
   * Patient
   */
  P: "P",

  /**
   * Manufacturer/marketing authority holder
   */
  M: "M",

  /**
   * Distributor
   */
  E: "E",

  /**
   * Other
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReportSourceCode =
  typeof Hl7VSReportSourceCode[keyof typeof Hl7VSReportSourceCode];
