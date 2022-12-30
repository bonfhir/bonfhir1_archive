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
  _CoveredPartyRoleType: "_CoveredPartyRoleType",

  /**
   * crime victim
   */
  CRIMEVIC: "CRIMEVIC",

  /**
   * injured worker
   */
  INJWKR: "INJWKR",

  /**
   * continuity of coverage beneficiary
   */
  COCBEN: "COCBEN",

  /**
   * differently abled
   */
  DIFFABL: "DIFFABL",

  /**
   * ward
   */
  WARD: "WARD",

  /**
   * retiree
   */
  RETIREE: "RETIREE",

  /**
   * member of an indigenous people
   */
  INDIG: "INDIG",

  /**
   * military
   */
  MIL: "MIL",

  /**
   * active duty military
   */
  ACTMIL: "ACTMIL",

  /**
   * retired military
   */
  RETMIL: "RETMIL",

  /**
   * veteran
   */
  VET: "VET",

  /**
   * injured plaintiff
   */
  INJ: "INJ",

  /**
   * student
   */
  STUD: "STUD",

  /**
   * full-time student
   */
  FSTUD: "FSTUD",

  /**
   * part-time student
   */
  PSTUD: "PSTUD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoveredPartyRoleTypeCode =
  typeof CoveredPartyRoleTypeCode[keyof typeof CoveredPartyRoleTypeCode];
