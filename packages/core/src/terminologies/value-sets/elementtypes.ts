/**
 * Allowed types for FHIR elements
 * http://hl7.org/fhir/ValueSet/fhir-element-types
 */
export const ElementTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ElementTypesCode =
  typeof ElementTypesCode[keyof typeof ElementTypesCode];
