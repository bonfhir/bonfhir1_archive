/**
 * **Description**A role recognized through the eligibility of a party play a claimant for benefits covered or provided under an insurance policy.
 * http://terminology.hl7.org/ValueSet/v3-ClaimantCoveredPartyRoleType
 */
export const ClaimantCoveredPartyRoleTypeCode = {
  /**
   * injured plaintiff
   */
  injuredplaintiff: "INJ",

  /**
   * ClaimantCoveredPartyRoleType
   */
  ClaimantCoveredPartyRoleType: "_ClaimantCoveredPartyRoleType",

  /**
   * crime victim
   */
  crimevictim: "CRIMEVIC",

  /**
   * injured worker
   */
  injuredworker: "INJWKR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimantCoveredPartyRoleTypeCode =
  typeof ClaimantCoveredPartyRoleTypeCode[keyof typeof ClaimantCoveredPartyRoleTypeCode];
