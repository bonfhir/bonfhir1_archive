/**
 * Concepts specifying a type of diagnosis being sent in HL7 Version 2.x messages.
 * http://terminology.hl7.org/ValueSet/v2-0052
 */
export const Hl7VSDiagnosisTypeCode = {
  /**
   * Admitting
   */
  Admitting: "A",

  /**
   * Working
   */
  Working: "W",

  /**
   * Final
   */
  Final: "F",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDiagnosisTypeCode =
  typeof Hl7VSDiagnosisTypeCode[keyof typeof Hl7VSDiagnosisTypeCode];
