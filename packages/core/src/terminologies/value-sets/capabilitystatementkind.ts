/**
 * How a capability statement is intended to be used.
 * http://hl7.org/fhir/ValueSet/capability-statement-kind
 */
export const CapabilityStatementKindCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CapabilityStatementKindCode =
  typeof CapabilityStatementKindCode[keyof typeof CapabilityStatementKindCode];
