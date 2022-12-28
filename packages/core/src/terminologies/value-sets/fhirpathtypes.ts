/**
 * All FHIRPath data types
 * http://hl7.org/fhir/ValueSet/fhirpath-types
 */
export const FHIRPathTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRPathTypesCode =
  typeof FHIRPathTypesCode[keyof typeof FHIRPathTypesCode];
