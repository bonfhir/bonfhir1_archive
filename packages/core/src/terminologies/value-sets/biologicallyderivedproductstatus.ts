/**
 * Biologically Derived Product Status.
 * http://hl7.org/fhir/ValueSet/product-status
 */
export const BiologicallyDerivedProductStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BiologicallyDerivedProductStatusCode =
  typeof BiologicallyDerivedProductStatusCode[keyof typeof BiologicallyDerivedProductStatusCode];
