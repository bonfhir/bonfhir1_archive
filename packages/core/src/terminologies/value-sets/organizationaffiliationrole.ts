/**
 * This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.
 * http://hl7.org/fhir/ValueSet/organization-role
 */
export const OrganizationAffiliationRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationAffiliationRoleCode =
  typeof OrganizationAffiliationRoleCode[keyof typeof OrganizationAffiliationRoleCode];
