/**
 * This value set includes example Procedure Type codes.
 * http://terminology.hl7.org/ValueSet/ex-procedure-type
 */
export const ExampleProcedureTypeCodesCode = {
  /**
   * Primary procedure
   */
  primary: "primary",

  /**
   * Secondary procedure
   */
  secondary: "secondary",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleProcedureTypeCodesCode =
  typeof ExampleProcedureTypeCodesCode[keyof typeof ExampleProcedureTypeCodesCode];
