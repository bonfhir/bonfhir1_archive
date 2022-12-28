/**
 * Classification of relationship between a therapy and a contraindication or an indication.
 * http://hl7.org/fhir/ValueSet/therapy-relationship-type
 */
export const TherapyRelationshipTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TherapyRelationshipTypeCode =
  typeof TherapyRelationshipTypeCode[keyof typeof TherapyRelationshipTypeCode];
