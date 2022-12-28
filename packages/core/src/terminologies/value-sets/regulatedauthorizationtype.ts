/**
 * Overall type of this authorization.
 * http://hl7.org/fhir/ValueSet/regulated-authorization-type
 */
export const RegulatedAuthorizationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RegulatedAuthorizationTypeCode =
  typeof RegulatedAuthorizationTypeCode[keyof typeof RegulatedAuthorizationTypeCode];
