/**
 * Applicable domain for this product (e.g. human, veterinary)
 * http://hl7.org/fhir/ValueSet/medicinal-product-domain
 */
export const MedicinalProductDomainCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicinalProductDomainCode =
  typeof MedicinalProductDomainCode[keyof typeof MedicinalProductDomainCode];
