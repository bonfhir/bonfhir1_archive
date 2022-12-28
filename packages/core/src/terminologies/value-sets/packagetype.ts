/**
 * A high level categorisation of a package.
 * http://hl7.org/fhir/ValueSet/package-type
 */
export const PackageTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PackageTypeCode =
  typeof PackageTypeCode[keyof typeof PackageTypeCode];
