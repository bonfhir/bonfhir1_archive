/**
 * This value set includes sample Program Reason Span codes.
 * http://terminology.hl7.org/ValueSet/ex-program-code
 */
export const ExampleProgramReasonCodesCode = {
  /**
   * Child Asthma
   */
  ChildAsthma: "as",

  /**
   * Hemodialysis
   */
  Hemodialysis: "hd",

  /**
   * Autism Screening
   */
  AutismScreening: "auscr",

  /**
   * None
   */
  None: "none",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleProgramReasonCodesCode =
  typeof ExampleProgramReasonCodesCode[keyof typeof ExampleProgramReasonCodesCode];
