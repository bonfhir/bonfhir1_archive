/**
 * The type of operator to use for assertion.
 * http://hl7.org/fhir/ValueSet/assert-operator-codes
 */
export const AssertionOperatorTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AssertionOperatorTypeCode =
  typeof AssertionOperatorTypeCode[keyof typeof AssertionOperatorTypeCode];
