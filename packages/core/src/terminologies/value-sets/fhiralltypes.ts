/**
 * A list of all the concrete types defined in this version of the FHIR specification - Abstract Types, Data Types and Resource Types.
 * http://hl7.org/fhir/ValueSet/all-types
 */
export const FHIRAllTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRAllTypesCode =
  typeof FHIRAllTypesCode[keyof typeof FHIRAllTypesCode];
