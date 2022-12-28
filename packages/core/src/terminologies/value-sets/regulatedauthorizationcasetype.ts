/**
 * The type of a case involved in an application.
 * http://hl7.org/fhir/ValueSet/regulated-authorization-case-type
 */
export const RegulatedAuthorizationCaseTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RegulatedAuthorizationCaseTypeCode =
  typeof RegulatedAuthorizationCaseTypeCode[keyof typeof RegulatedAuthorizationCaseTypeCode];
