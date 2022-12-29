/**
 * **Description:**A role recognized through the eligibility of a party to play a program eligible for benefits covered or provided under a program.
 * http://terminology.hl7.org/ValueSet/v3-ProgramEligibleCoveredPartyRoleType
 */
export const ProgramEligibleCoveredPartyRoleTypeCode = {
  /**
   * ProgramEligiblePartyRoleType
   */
  ProgramEligiblePartyRoleType: "_ProgramEligiblePartyRoleType",

  /**
   * crime victim
   */
  crimevictim: "CRIMEVIC",

  /**
   * injured worker
   */
  injuredworker: "INJWKR",

  /**
   * differently abled
   */
  differentlyabled: "DIFFABL",

  /**
   * ward
   */
  ward: "WARD",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProgramEligibleCoveredPartyRoleTypeCode =
  typeof ProgramEligibleCoveredPartyRoleTypeCode[keyof typeof ProgramEligibleCoveredPartyRoleTypeCode];
