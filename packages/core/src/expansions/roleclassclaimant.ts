/**
 * **Description:** A role played by a party making a claim for coverage under a policy or program. A claimant must be either a person or organization, or a group of persons or organizations. A claimant is not a named insured or a program eligible.

**Discussion:** With respect to liability insurance such as property and casualty insurance, a claimant must file a claim requesting indemnification for a loss that the claimant considers covered under the policy of a named insured. The claims adjuster for the policy underwriter will review the claim to determine whether the loss meets the benefit coverage criteria under a policy, and base any indemnification or coverage payment on that review. If a third party is liable in whole or part for the loss, the underwriter may pursue third party liability recovery. A claimant may be involved in civil or criminal legal proceedings involving claims against a defendant party that is indemnified by an insurance policy or to protest the finding of a claims adjustor. With respect to life insurance, a beneficiary designated by a named insured becomes a claimant of the proceeds of coverage, as in the case of a life insurance policy. However, a claimant for coverage under life insurance is not necessarily a designated beneficiary.

**Note:** A claimant is not a named insured. However, a named insured may make a claim under a policy, e.g., an insured driver may make a claim for an injury under his or her comprehensive automobile insurance policy. Similarly, a program eligible may make a claim under program, e.g., an unemployed worker may claim benefits under an unemployment insurance program, but parties playing these covered party role classes are not, for purposes of this vocabulary and in an effort to clearly distinguish role classes, considered claimants.

In the case of a named insured making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that either a named insured or an individual insured has filed a claim for a loss. In the case of a program eligible, a role type code INJWKR (injured worker) subtypes the class to indicate that the covered party in a workers compensation program is an injured worker, and as such, has filed a "claim" under the program for benefits. Likewise, a covered role type code UNEMP (unemployed worker) subtypes the program eligible class to indicate that the covered party in an unemployment insurance program has filed a claim for unemployment benefits.

**Example:** A claimant under automobile policy that is not the named insured.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassClaimant
 */
export const RoleClassClaimantCode = {
  /**
   * claimant
   */
  CLAIM: "CLAIM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassClaimantCode =
  typeof RoleClassClaimantCode[keyof typeof RoleClassClaimantCode];
