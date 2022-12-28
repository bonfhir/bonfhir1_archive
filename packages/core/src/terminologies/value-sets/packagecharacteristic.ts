/**
 * A characteristic of a package.
 * http://hl7.org/fhir/ValueSet/package-characteristic
 */
export const PackageCharacteristicCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PackageCharacteristicCode =
  typeof PackageCharacteristicCode[keyof typeof PackageCharacteristicCode];
