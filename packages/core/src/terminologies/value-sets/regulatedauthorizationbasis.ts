/**
 * A legal or regulatory framework against which an authorization is granted, or other reasons for it.
 * http://hl7.org/fhir/ValueSet/regulated-authorization-basis
 */
export const RegulatedAuthorizationBasisCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RegulatedAuthorizationBasisCode =
  typeof RegulatedAuthorizationBasisCode[keyof typeof RegulatedAuthorizationBasisCode];
