/**
 * Codes indicating how resources behave from a security perspective
 * http://hl7.org/fhir/ValueSet/resource-security-category
 */
export const ResourceSecurityCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResourceSecurityCategoryCode =
  typeof ResourceSecurityCategoryCode[keyof typeof ResourceSecurityCategoryCode];
