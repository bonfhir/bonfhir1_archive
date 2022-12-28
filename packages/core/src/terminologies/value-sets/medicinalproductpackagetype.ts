/**
 * Types of medicinal product packs
 * http://hl7.org/fhir/ValueSet/medicinal-product-package-type
 */
export const MedicinalProductPackageTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicinalProductPackageTypeCode =
  typeof MedicinalProductPackageTypeCode[keyof typeof MedicinalProductPackageTypeCode];
