/**
 * Value Set of codes that specify the status of a diagnosis for a diagnosis related group (DRG) determination.
 * http://terminology.hl7.org/ValueSet/v2-0731
 */
export const Hl7VSDrgDiagnosisDeterminationStatusCode = {
  /**
   * Valid code
   */
  Validcode: "0",

  /**
   * Invalid code
   */
  Invalidcode: "1",

  /**
   * Two primary diagnosis codes
   */
  Twoprimarydiagnosiscodes: "2",

  /**
   * Invalid for this gender
   */
  Invalidforthisgender: "3",

  /**
   * Invalid for this age
   */
  Invalidforthisage: "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDrgDiagnosisDeterminationStatusCode =
  typeof Hl7VSDrgDiagnosisDeterminationStatusCode[keyof typeof Hl7VSDrgDiagnosisDeterminationStatusCode];
