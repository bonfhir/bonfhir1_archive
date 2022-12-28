/**
 * Value Set of codes that specify the status of a diagnosis for a diagnosis related group (DRG) determination.
 * http://terminology.hl7.org/ValueSet/v2-0731
 */
export const Hl7VSDrgDiagnosisDeterminationStatusCode = {
  /**
   * Valid code
   */
  "0": "0",

  /**
   * Invalid code
   */
  "1": "1",

  /**
   * Two primary diagnosis codes
   */
  "2": "2",

  /**
   * Invalid for this gender
   */
  "3": "3",

  /**
   * Invalid for this age
   */
  "4": "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDrgDiagnosisDeterminationStatusCode =
  typeof Hl7VSDrgDiagnosisDeterminationStatusCode[keyof typeof Hl7VSDrgDiagnosisDeterminationStatusCode];
