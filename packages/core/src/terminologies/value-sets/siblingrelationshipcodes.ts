/**
 * The value set includes the v3 RoleCode SIB (sibling) and all of its specializations.  It covers the relationships needed to establish genetic pedigree relationships between family members.
 * http://hl7.org/fhir/ValueSet/sibling-relationship-codes
 */
export const SiblingRelationshipCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SiblingRelationshipCodesCode =
  typeof SiblingRelationshipCodesCode[keyof typeof SiblingRelationshipCodesCode];
