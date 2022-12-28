/**
 * Relationship to another Medicinal Product.
 * http://hl7.org/fhir/ValueSet/medicinal-product-cross-reference-type
 */
export const ProductCrossReferenceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProductCrossReferenceTypeCode =
  typeof ProductCrossReferenceTypeCode[keyof typeof ProductCrossReferenceTypeCode];
