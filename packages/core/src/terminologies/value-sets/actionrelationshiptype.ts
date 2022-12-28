/**
 * Defines the types of relationships between actions.
 * http://hl7.org/fhir/ValueSet/action-relationship-type
 */
export const ActionRelationshipTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionRelationshipTypeCode =
  typeof ActionRelationshipTypeCode[keyof typeof ActionRelationshipTypeCode];
