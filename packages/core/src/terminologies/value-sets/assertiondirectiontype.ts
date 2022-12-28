/**
 * The type of direction to use for assertion.
 * http://hl7.org/fhir/ValueSet/assert-direction-codes
 */
export const AssertionDirectionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AssertionDirectionTypeCode =
  typeof AssertionDirectionTypeCode[keyof typeof AssertionDirectionTypeCode];
