/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 * http://terminology.hl7.org/ValueSet/measure-type
 */
export const MeasureTypeCode = {
  /**
   * Process
   */
  Process: "process",

  /**
   * Outcome
   */
  Outcome: "outcome",

  /**
   * Structure
   */
  Structure: "structure",

  /**
   * Patient Reported Outcome
   */
  PatientReportedOutcome: "patient-reported-outcome",

  /**
   * Composite
   */
  Composite: "composite",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureTypeCode =
  typeof MeasureTypeCode[keyof typeof MeasureTypeCode];
