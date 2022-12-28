/**
 * This value set includes example Procedure Type codes.
 * http://hl7.org/fhir/ValueSet/ex-procedure-type
 */
export const ExampleProcedureTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleProcedureTypeCodesCode =
  typeof ExampleProcedureTypeCodesCode[keyof typeof ExampleProcedureTypeCodesCode];
