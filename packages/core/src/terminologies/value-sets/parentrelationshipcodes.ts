/**
 * The value set includes the v3 RoleCode PRN (parent), TWIN (twin) and all of their specializations.  It covers the relationships needed to establish genetic pedigree relationships between family members.
 * http://hl7.org/fhir/ValueSet/parent-relationship-codes
 */
export const ParentRelationshipCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParentRelationshipCodesCode =
  typeof ParentRelationshipCodesCode[keyof typeof ParentRelationshipCodesCode];
