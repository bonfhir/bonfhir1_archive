/**
 * A type of packaging.
 * http://hl7.org/fhir/ValueSet/packaging-type
 */
export const PackagingTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PackagingTypeCode =
  typeof PackagingTypeCode[keyof typeof PackagingTypeCode];
