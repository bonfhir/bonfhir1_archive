/**
 * This value set includes sample Claim Care Team Role codes.
 * http://hl7.org/fhir/ValueSet/claim-careteamrole
 */
export const ClaimCareTeamRoleCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimCareTeamRoleCodesCode =
  typeof ClaimCareTeamRoleCodesCode[keyof typeof ClaimCareTeamRoleCodesCode];
