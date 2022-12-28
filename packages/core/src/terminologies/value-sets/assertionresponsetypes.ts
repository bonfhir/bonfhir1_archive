/**
 * The type of response code to use for assertion.
 * http://hl7.org/fhir/ValueSet/assert-response-code-types
 */
export const AssertionResponseTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AssertionResponseTypesCode =
  typeof AssertionResponseTypesCode[keyof typeof AssertionResponseTypesCode];
