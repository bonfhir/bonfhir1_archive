/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 * http://hl7.org/fhir/ValueSet/linkage-type
 */
export const LinkageTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LinkageTypeCode =
  typeof LinkageTypeCode[keyof typeof LinkageTypeCode];
