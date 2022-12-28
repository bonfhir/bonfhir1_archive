/**
 * Type for access of external URI.
 * http://hl7.org/fhir/ValueSet/repository-type
 */
export const repositoryTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type repositoryTypeCode =
  typeof repositoryTypeCode[keyof typeof repositoryTypeCode];
