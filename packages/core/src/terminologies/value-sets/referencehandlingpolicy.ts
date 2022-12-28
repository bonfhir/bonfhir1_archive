/**
 * A set of flags that defines how references are supported.
 * http://hl7.org/fhir/ValueSet/reference-handling-policy
 */
export const ReferenceHandlingPolicyCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReferenceHandlingPolicyCode =
  typeof ReferenceHandlingPolicyCode[keyof typeof ReferenceHandlingPolicyCode];
