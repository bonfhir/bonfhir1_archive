/**
 * Links two people in a personal relationship. The character of the relationship must be defined by a PersonalRelationshipRoleType code. The player and scoper are determined by PersonalRelationshipRoleType code as well.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPersonalRelationship
 */
export const RoleClassPersonalRelationshipCode = {
  /**
   * personal relationship
   */
  personalrelationship: "PRS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPersonalRelationshipCode =
  typeof RoleClassPersonalRelationshipCode[keyof typeof RoleClassPersonalRelationshipCode];
