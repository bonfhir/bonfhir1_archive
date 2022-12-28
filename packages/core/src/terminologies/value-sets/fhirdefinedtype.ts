/**
 * A list of all the concrete types defined in this version of the FHIR specification - Data Types and Resource Types.
 * http://hl7.org/fhir/ValueSet/defined-types
 */
export const FHIRDefinedTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRDefinedTypeCode =
  typeof FHIRDefinedTypeCode[keyof typeof FHIRDefinedTypeCode];
