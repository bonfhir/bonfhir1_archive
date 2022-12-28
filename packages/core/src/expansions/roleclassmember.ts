/**
 * A role played by an entity that is a member of a group. The group provides the scope for this role.

Among other uses, groups as used in insurance (groups of covered individuals) and in scheduling where resources may be grouped for scheduling and logistical purposes.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassMember
 */
export const RoleClassMemberCode = {
  /**
   * member
   */
  MBR: "MBR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassMemberCode =
  typeof RoleClassMemberCode[keyof typeof RoleClassMemberCode];
