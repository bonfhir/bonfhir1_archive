/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 * http://hl7.org/fhir/ValueSet/organization-type
 */
export const OrganizationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationTypeCode =
  typeof OrganizationTypeCode[keyof typeof OrganizationTypeCode];
