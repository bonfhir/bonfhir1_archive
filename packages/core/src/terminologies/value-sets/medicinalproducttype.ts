/**
 * Overall defining type of this Medicinal Product.
 * http://hl7.org/fhir/ValueSet/medicinal-product-type
 */
export const MedicinalProductTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicinalProductTypeCode =
  typeof MedicinalProductTypeCode[keyof typeof MedicinalProductTypeCode];
