/**
 * **Definition:** A person playing the role of program eligible under a program based on military status.

**Discussion:** This CoveredPartyRoleType.code is typically used when the CoveredPartyRole class code is either "program eligible" or "subscriber" and the person's status as a member of the military meets jurisdictional or program criteria
 * http://terminology.hl7.org/ValueSet/v3-MilitaryRoleType
 */
export const MilitaryRoleTypeCode = {
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
export type MilitaryRoleTypeCode =
  typeof MilitaryRoleTypeCode[keyof typeof MilitaryRoleTypeCode];
