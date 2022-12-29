/**
 * **Description:** A role recognized through the eligibility of an identified party for benefits covered under an insurance policy or a program based on meeting eligibility criteria.

Eligibility as a covered party may be conditioned on the party meeting criteria to qualify for coverage under a policy or program, which may be mandated by law. These criteria may be:

1.  The sole basis for coverage, e.g., being differently abled may qualify a person for disability coverage
2.  May more fully qualify a covered party role e.g, being differently abled may qualify an adult child as a dependent
3.  May impact the level of coverage for a covered party under a policy or program, e.g., being differently abled may qualify a program eligible for additional benefits.

**Discussion:** The Abstract Value Set "CoverageRoleType", which was developed for use in the Canadian realm "pre-coordinate" coverage roles with other roles that a covered party must play in order to be eligible for coverage, e.g., "handicapped dependent". These role.codes may only be used with COVPTY to avoid overlapping concepts that would result from using them to specify the specializations of COVPTY, e.g., the role.class DEPEN should not be used with the role.code family dependent because that relationship has overlapping concepts due to the role.code precoodination and is conveyed in FICO with the personal relationship role that has a PART role link to the covered party role. For the same reasons, the role.class DEPEN should not be used with the role.code HANDIC (handicapped dependent); the role.code DIFFABLE (differently abled) should be used instead.

In summary, the coded concepts in the Abstract Value Set "CoveredPartyRoleType" can be "post-coordinated" with the "RoleClassCoveredParty" Abstract Value Set. Decoupling these concepts is intended to support an expansive range of covered party concepts and their semantic comparability.
 * http://terminology.hl7.org/ValueSet/v3-PolicyOrProgramCoverageRoleType
 */
export const PolicyOrProgramCoverageRoleTypeCode = {
  /**
   * PolicyOrProgramCoverageRoleType
   */
  PolicyOrProgramCoverageRoleType: "_PolicyOrProgramCoverageRoleType",

  /**
   * CoverageRoleType
   */
  CoverageRoleType: "_CoverageRoleType",

  /**
   * family dependent
   */
  familydependent: "FAMDEP",

  /**
   * handicapped dependent
   */
  handicappeddependent: "HANDIC",

  /**
   * injured plaintiff
   */
  injuredplaintiff: "INJ",

  /**
   * self
   */
  self: "SELF",

  /**
   * sponsored dependent
   */
  sponsoreddependent: "SPON",

  /**
   * student
   */
  student: "STUD",

  /**
   * full-time student
   */
  fulltimestudent: "FSTUD",

  /**
   * part-time student
   */
  parttimestudent: "PSTUD",

  /**
   * adopted child
   */
  adoptedchild: "ADOPT",

  /**
   * grandchild
   */
  grandchild: "GCHILD",

  /**
   * grandparent
   */
  grandparent: "GPARNT",

  /**
   * natural child
   */
  naturalchild: "NAT",

  /**
   * niece/nephew
   */
  niecenephew: "NIENE",

  /**
   * parent
   */
  parent: "PARNT",

  /**
   * spouse
   */
  spouse: "SPSE",

  /**
   * step child
   */
  stepchild: "STEP",

  /**
   * covered party role type
   */
  coveredpartyroletype: "_CoveredPartyRoleType",

  /**
   * ClaimantCoveredPartyRoleType
   */
  ClaimantCoveredPartyRoleType: "_ClaimantCoveredPartyRoleType",

  /**
   * crime victim
   */
  crimevictim: "CRIMEVIC",

  /**
   * injured worker
   */
  injuredworker: "INJWKR",

  /**
   * DependentCoveredPartyRoleType
   */
  DependentCoveredPartyRoleType: "_DependentCoveredPartyRoleType",

  /**
   * continuity of coverage beneficiary
   */
  continuityofcoveragebeneficiary: "COCBEN",

  /**
   * differently abled
   */
  differentlyabled: "DIFFABL",

  /**
   * ward
   */
  ward: "WARD",

  /**
   * IndividualInsuredPartyRoleType
   */
  IndividualInsuredPartyRoleType: "_IndividualInsuredPartyRoleType",

  /**
   * retiree
   */
  retiree: "RETIREE",

  /**
   * ProgramEligiblePartyRoleType
   */
  ProgramEligiblePartyRoleType: "_ProgramEligiblePartyRoleType",

  /**
   * member of an indigenous people
   */
  memberofanindigenouspeople: "INDIG",

  /**
   * military
   */
  military: "MIL",

  /**
   * active duty military
   */
  activedutymilitary: "ACTMIL",

  /**
   * retired military
   */
  retiredmilitary: "RETMIL",

  /**
   * veteran
   */
  veteran: "VET",

  /**
   * SubscriberCoveredPartyRoleType
   */
  SubscriberCoveredPartyRoleType: "_SubscriberCoveredPartyRoleType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PolicyOrProgramCoverageRoleTypeCode =
  typeof PolicyOrProgramCoverageRoleTypeCode[keyof typeof PolicyOrProgramCoverageRoleTypeCode];
