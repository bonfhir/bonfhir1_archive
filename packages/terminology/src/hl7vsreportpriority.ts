/**
 * Value Set of codes which specify the priority associated with a report or update run using a query.
 * http://terminology.hl7.org/ValueSet/v2-0109
 */
export const Hl7VSReportPriorityCode = {
  /**
   * Routine
   */
  Routine: "R",

  /**
   * Stat
   */
  Stat: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReportPriorityCode =
  typeof Hl7VSReportPriorityCode[keyof typeof Hl7VSReportPriorityCode];
