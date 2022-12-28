/**
 * The relationship between two substance types.
 * http://hl7.org/fhir/ValueSet/substance-relationship-type
 */
export const SubstanceRelationshipTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceRelationshipTypeCode =
  typeof SubstanceRelationshipTypeCode[keyof typeof SubstanceRelationshipTypeCode];
