/**
 * Whether an operation parameter is an input or an output parameter.
 * http://hl7.org/fhir/ValueSet/operation-parameter-use
 */
export const OperationParameterUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OperationParameterUseCode =
  typeof OperationParameterUseCode[keyof typeof OperationParameterUseCode];
