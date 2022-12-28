/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 * http://hl7.org/fhir/ValueSet/testscript-operation-codes
 */
export const TestScriptOperationCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TestScriptOperationCodeCode =
  typeof TestScriptOperationCodeCode[keyof typeof TestScriptOperationCodeCode];
