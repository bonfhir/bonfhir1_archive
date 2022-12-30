/**
 * **Description:** A relationship between a party that receives benefit coverage under the terms of an insurance policy or program and the underwriter of the policy or program. The role is played by the party that receives benefit coverage under the terms of a particular insurance policy or program. The organization playing the underwriter of that policy or program is the scoping entity.

A covered party receives coverage under a policy because of some contractual or other relationship with the policy holder. In most cases, the policy holder has discretion over which parties may be covered under a policy, unless the policy holder assigns or is required by a court to assign this right.

A covered party receives coverage under a program by being determined eligible based on program eligibility criteria specified by the program sponsor.

**Discussion:** This reason for coverage is specified by use of a role type code from either of the abstract value sets beneath the PolicyOrProgramCoverageRoleType abstract value set.

The CoverageRoleType abstract value set can only be used when the role class is the concept code "covered party" (COVPTY) because this value set contains precoordinated coded concepts relating to coverage criteria that was developed for the Canadian realm. This is to avoid overlapping concepts, e.g., the DEPEN role.class cannot be used with the FAMDEP Role.code

The CoveredPartyRoleType abstract value set may be used with any of the covered party role class codes to support post coordination of coverage criteria. Where coverage under a policy depends on the concurrence of a policy holder, a relationship link with type code of indirect authority should be included using the policy holder role as the source, and the covered party role as the target.

**Note:** A particular policy may cover several parties, one of whom may be, but need not be, the policy holder. Thus the notion of covered party is a role that is distinct from that of the policy holder.

**Note:** The entity playing the role of covered party is an organization, a non-person living subject or a group of persons, the role class codes Subscriber and Dependent may not be used.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassCoveredParty
 */
export const RoleClassCoveredPartyCode = {
  /**
   * covered party
   */
  COVPTY: "COVPTY",

  /**
   * claimant
   */
  CLAIM: "CLAIM",

  /**
   * named insured
   */
  NAMED: "NAMED",

  /**
   * dependent
   */
  DEPEN: "DEPEN",

  /**
   * individual
   */
  INDIV: "INDIV",

  /**
   * subscriber
   */
  SUBSCR: "SUBSCR",

  /**
   * program eligible
   */
  PROG: "PROG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCoveredPartyCode =
  typeof RoleClassCoveredPartyCode[keyof typeof RoleClassCoveredPartyCode];
