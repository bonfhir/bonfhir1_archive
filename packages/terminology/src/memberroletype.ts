/**
 * A role type that is used to further qualify an entity playing a role where the role class attribute is set to RoleClassMember.
 * http://terminology.hl7.org/ValueSet/v3-MemberRoleType
 */
export const MemberRoleTypeCode = {
  /**
   * Tribal Member
   */
  TribalMember: "TRB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MemberRoleTypeCode =
  typeof MemberRoleTypeCode[keyof typeof MemberRoleTypeCode];
