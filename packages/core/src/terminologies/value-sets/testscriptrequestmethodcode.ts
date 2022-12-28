/**
 * The allowable request method or HTTP operation codes.
 * http://hl7.org/fhir/ValueSet/http-operations
 */
export const TestScriptRequestMethodCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestScriptRequestMethodCodeCode =
  typeof TestScriptRequestMethodCodeCode[keyof typeof TestScriptRequestMethodCodeCode];
