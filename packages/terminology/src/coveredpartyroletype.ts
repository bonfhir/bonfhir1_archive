/**
 * A role recognized through the eligibility of an identified living subject for benefits covered under an insurance policy or a program. Eligibility as a covered party may be conditioned on a relationship with (1) the policy holder such as the policy holder who is covered as an individual under a poliy or as a party sponsored for coverage by the policy holder.

**Example:**An employee as a subscriber; or (2) on being scoped another covered party such as the subscriber, as in the case of a dependent.

**Discussion:** The Abstract Value Set "CoverageRoleType", which was developed for use in the Canadian realm "pre-coordinate" coverage roles with other roles that a covered party must play in order to be eligible for coverage, e.g., "handicapped dependent". Other codes in the Abstract Value Set CoveredPartyRoleType domain can be "post-coordinated" with the EligiblePartyRoleType codes to denote comparable concepts. Decoupling the concepts is intended to support a wider range of concepts and semantic comparability of coded concepts.
 * http://terminology.hl7.org/ValueSet/v3-CoveredPartyRoleType
 */
export const CoveredPartyRoleTypeCode = {
  /**
   * covered party role type
   */
  coveredpartyroletype: "_CoveredPartyRoleType",

  /**
   * crime victim
   */
  crimevictim: "CRIMEVIC",

  /**
   * injured worker
   */
  injuredworker: "INJWKR",

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
   * retiree
   */
  retiree: "RETIREE",

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
   * injured plaintiff
   */
  injuredplaintiff: "INJ",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoveredPartyRoleTypeCode =
  typeof CoveredPartyRoleTypeCode[keyof typeof CoveredPartyRoleTypeCode];
