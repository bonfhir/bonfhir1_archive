/**
 * Value Set of codes that specify the available priorities reporting the test results when the user is asked to specify the reporting priority independent of the processing priority.
 * http://terminology.hl7.org/ValueSet/v2-0169
 */
export const Hl7VSReportingPriorityCode = {
  /**
   * Call back results
   */
  C: "C",

  /**
   * Rush reporting
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReportingPriorityCode =
  typeof Hl7VSReportingPriorityCode[keyof typeof Hl7VSReportingPriorityCode];
