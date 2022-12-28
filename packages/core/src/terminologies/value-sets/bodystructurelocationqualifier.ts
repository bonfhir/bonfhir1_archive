/**
 * SNOMED-CT concepts modifying the anatomic location
 * http://hl7.org/fhir/ValueSet/bodystructure-relative-location
 */
export const BodystructureLocationQualifierCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BodystructureLocationQualifierCode =
  typeof BodystructureLocationQualifierCode[keyof typeof BodystructureLocationQualifierCode];
