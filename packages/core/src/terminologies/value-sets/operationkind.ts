/**
 * Whether an operation is a normal operation or a query.
 * http://hl7.org/fhir/ValueSet/operation-kind
 */
export const OperationKindCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OperationKindCode =
  typeof OperationKindCode[keyof typeof OperationKindCode];
