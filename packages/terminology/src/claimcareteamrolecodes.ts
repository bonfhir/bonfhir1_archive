/**
 * This value set includes sample Claim Care Team Role codes.
 * http://terminology.hl7.org/ValueSet/claim-careteamrole
 */
export const ClaimCareTeamRoleCodesCode = {
  /**
   * Primary provider
   */
  Primaryprovider: "primary",

  /**
   * Assisting Provider
   */
  AssistingProvider: "assist",

  /**
   * Supervising Provider
   */
  SupervisingProvider: "supervisor",

  /**
   * Other
   */
  Other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimCareTeamRoleCodesCode =
  typeof ClaimCareTeamRoleCodesCode[keyof typeof ClaimCareTeamRoleCodesCode];
