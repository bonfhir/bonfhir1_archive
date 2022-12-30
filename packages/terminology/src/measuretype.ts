/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 * http://terminology.hl7.org/ValueSet/measure-type
 */
export const MeasureTypeCode = {
  /**
   * Process
   */
  process: "process",

  /**
   * Outcome
   */
  outcome: "outcome",

  /**
   * Structure
   */
  structure: "structure",

  /**
   * Patient Reported Outcome
   */
  "patient-reported-outcome": "patient-reported-outcome",

  /**
   * Composite
   */
  composite: "composite",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureTypeCode =
  typeof MeasureTypeCode[keyof typeof MeasureTypeCode];
