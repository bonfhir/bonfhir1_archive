/**
 * **Description:** A role recognized through the eligibility of a party to play a dependent for benefits covered or provided under a health insurance policy because of an association with the subscriber that is recognized by the policy underwriter.
 * http://terminology.hl7.org/ValueSet/v3-DependentCoveredPartyRoleType
 */
export const DependentCoveredPartyRoleTypeCode = {
  /**
   * DependentCoveredPartyRoleType
   */
  _DependentCoveredPartyRoleType: "_DependentCoveredPartyRoleType",

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
export type DependentCoveredPartyRoleTypeCode =
  typeof DependentCoveredPartyRoleTypeCode[keyof typeof DependentCoveredPartyRoleTypeCode];
