/**
 * **Description:**A role recognized through the eligibility of a party to play a program eligible for benefits covered or provided under a program.
 * http://terminology.hl7.org/ValueSet/v3-ProgramEligibleCoveredPartyRoleType
 */
export const ProgramEligibleCoveredPartyRoleTypeCode = {
  /**
   * ProgramEligiblePartyRoleType
   */
  _ProgramEligiblePartyRoleType: "_ProgramEligiblePartyRoleType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProgramEligibleCoveredPartyRoleTypeCode =
  typeof ProgramEligibleCoveredPartyRoleTypeCode[keyof typeof ProgramEligibleCoveredPartyRoleTypeCode];
