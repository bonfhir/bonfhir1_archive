/**
 * A material used in the construction of packages and their components.
 * http://hl7.org/fhir/ValueSet/package-material
 */
export const PackageMaterialCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PackageMaterialCode =
  typeof PackageMaterialCode[keyof typeof PackageMaterialCode];
