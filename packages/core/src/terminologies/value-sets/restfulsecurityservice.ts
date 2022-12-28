/**
 * Types of security services used with FHIR.
 * http://hl7.org/fhir/ValueSet/restful-security-service
 */
export const RestfulSecurityServiceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RestfulSecurityServiceCode =
  typeof RestfulSecurityServiceCode[keyof typeof RestfulSecurityServiceCode];
