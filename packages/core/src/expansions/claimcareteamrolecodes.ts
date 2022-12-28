/**
 * This value set includes sample Claim Care Team Role codes.
 * http://terminology.hl7.org/ValueSet/claim-careteamrole
 */
export const ClaimCareTeamRoleCodesCode = {
  /**
   * Primary provider
   */
  primary: "primary",

  /**
   * Assisting Provider
   */
  assist: "assist",

  /**
   * Supervising Provider
   */
  supervisor: "supervisor",

  /**
   * Other
   */
  other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimCareTeamRoleCodesCode =
  typeof ClaimCareTeamRoleCodesCode[keyof typeof ClaimCareTeamRoleCodesCode];
