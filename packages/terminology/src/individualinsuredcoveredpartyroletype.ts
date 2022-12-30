/**
 * **Description**A role recognized through the eligibility of a party to play an individual insured for benefits covered or provided under an insurance policy where the party is also the policy holder.
 * http://terminology.hl7.org/ValueSet/v3-IndividualInsuredCoveredPartyRoleType
 */
export const IndividualInsuredCoveredPartyRoleTypeCode = {
  /**
   * IndividualInsuredPartyRoleType
   */
  _IndividualInsuredPartyRoleType: "_IndividualInsuredPartyRoleType",

  /**
   * continuity of coverage beneficiary
   */
  COCBEN: "COCBEN",

  /**
   * retiree
   */
  RETIREE: "RETIREE",

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
export type IndividualInsuredCoveredPartyRoleTypeCode =
  typeof IndividualInsuredCoveredPartyRoleTypeCode[keyof typeof IndividualInsuredCoveredPartyRoleTypeCode];
