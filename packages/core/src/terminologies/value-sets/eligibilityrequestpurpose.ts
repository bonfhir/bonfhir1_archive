/**
 * A code specifying the types of information being requested.
 * http://hl7.org/fhir/ValueSet/eligibilityrequest-purpose
 */
export const EligibilityRequestPurposeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EligibilityRequestPurposeCode =
  typeof EligibilityRequestPurposeCode[keyof typeof EligibilityRequestPurposeCode];
