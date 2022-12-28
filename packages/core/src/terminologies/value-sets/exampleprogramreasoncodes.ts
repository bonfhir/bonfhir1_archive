/**
 * This value set includes sample Program Reason Span codes.
 * http://hl7.org/fhir/ValueSet/ex-program-code
 */
export const ExampleProgramReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleProgramReasonCodesCode =
  typeof ExampleProgramReasonCodesCode[keyof typeof ExampleProgramReasonCodesCode];
