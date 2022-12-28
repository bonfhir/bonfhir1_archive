/**
 * A code specifying the types of information being requested.
 * http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose
 */
export const EligibilityResponsePurposeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EligibilityResponsePurposeCode =
  typeof EligibilityResponsePurposeCode[keyof typeof EligibilityResponsePurposeCode];
