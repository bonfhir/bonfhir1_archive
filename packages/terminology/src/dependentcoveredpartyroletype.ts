/**
 * **Description:** A role recognized through the eligibility of a party to play a dependent for benefits covered or provided under a health insurance policy because of an association with the subscriber that is recognized by the policy underwriter.
 * http://terminology.hl7.org/ValueSet/v3-DependentCoveredPartyRoleType
 */
export const DependentCoveredPartyRoleTypeCode = {
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
export type DependentCoveredPartyRoleTypeCode =
  typeof DependentCoveredPartyRoleTypeCode[keyof typeof DependentCoveredPartyRoleTypeCode];
