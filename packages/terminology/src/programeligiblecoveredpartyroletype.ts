/**
 * **Description:**A role recognized through the eligibility of a party to play a program eligible for benefits covered or provided under a program.
 * http://terminology.hl7.org/ValueSet/v3-ProgramEligibleCoveredPartyRoleType
 */
export const ProgramEligibleCoveredPartyRoleTypeCode = {
  /**
   * ProgramEligiblePartyRoleType
   */
  _ProgramEligiblePartyRoleType: "_ProgramEligiblePartyRoleType",

  /**
   * crime victim
   */
  CRIMEVIC: "CRIMEVIC",

  /**
   * injured worker
   */
  INJWKR: "INJWKR",

  /**
   * differently abled
   */
  DIFFABL: "DIFFABL",

  /**
   * ward
   */
  WARD: "WARD",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProgramEligibleCoveredPartyRoleTypeCode =
  typeof ProgramEligibleCoveredPartyRoleTypeCode[keyof typeof ProgramEligibleCoveredPartyRoleTypeCode];
