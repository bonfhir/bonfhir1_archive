/**
 * **Description**A role recognized through the eligibility of a party to play an individual insured for benefits covered or provided under an insurance policy where the party is also the policy holder.
 * http://terminology.hl7.org/ValueSet/v3-IndividualInsuredCoveredPartyRoleType
 */
export const IndividualInsuredCoveredPartyRoleTypeCode = {
  /**
   * IndividualInsuredPartyRoleType
   */
  IndividualInsuredPartyRoleType: "_IndividualInsuredPartyRoleType",

  /**
   * continuity of coverage beneficiary
   */
  continuityofcoveragebeneficiary: "COCBEN",

  /**
   * retiree
   */
  retiree: "RETIREE",

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
export type IndividualInsuredCoveredPartyRoleTypeCode =
  typeof IndividualInsuredCoveredPartyRoleTypeCode[keyof typeof IndividualInsuredCoveredPartyRoleTypeCode];
