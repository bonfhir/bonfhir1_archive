/**
 * A set of codes that can be used to indicate the relationship between a Patient and a Related Person.
 * http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype
 */
export const PatientRelationshipTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientRelationshipTypeCode =
  typeof PatientRelationshipTypeCode[keyof typeof PatientRelationshipTypeCode];
