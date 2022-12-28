/**
 * Confidentiality rating, e.g. commercial sensitivity for a Medicinal Product.
 * http://hl7.org/fhir/ValueSet/medicinal-product-confidentiality
 */
export const ProductConfidentialityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProductConfidentialityCode =
  typeof ProductConfidentialityCode[keyof typeof ProductConfidentialityCode];
