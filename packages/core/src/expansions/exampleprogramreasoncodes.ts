/**
 * This value set includes sample Program Reason Span codes.
 * http://terminology.hl7.org/ValueSet/ex-program-code
 */
export const ExampleProgramReasonCodesCode = {
  /**
   * Child Asthma
   */
  as: "as",

  /**
   * Hemodialysis
   */
  hd: "hd",

  /**
   * Autism Screening
   */
  auscr: "auscr",

  /**
   * None
   */
  none: "none",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleProgramReasonCodesCode =
  typeof ExampleProgramReasonCodesCode[keyof typeof ExampleProgramReasonCodesCode];
