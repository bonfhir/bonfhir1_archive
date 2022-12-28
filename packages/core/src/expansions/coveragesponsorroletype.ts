/**
 * **Description:**Codes that indicate a specific type of sponsor. Used when the sponsor's role is only either as a fully insured sponsor or only as a self-insured sponsor. NOTE: Where a sponsor may be either, use the SponsorParticipationFunction.code (fully insured or self insured) to indicate the type of responsibility. (CO6-0057)
 * http://terminology.hl7.org/ValueSet/v3-CoverageSponsorRoleType
 */
export const CoverageSponsorRoleTypeCode = {
  /**
   * CoverageSponsorRoleType
   */
  _CoverageSponsorRoleType: "_CoverageSponsorRoleType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageSponsorRoleTypeCode =
  typeof CoverageSponsorRoleTypeCode[keyof typeof CoverageSponsorRoleTypeCode];
