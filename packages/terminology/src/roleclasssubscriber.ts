/**
 * **Description:** A role played by a person covered under a policy based on association with a sponsor who is the policy holder, and whose association may provide for the eligibility of dependents for coverage.

**Discussion:** The policy holder holds the contract with the policy or program underwriter. The subscriber holds a certificate of coverage under the contract. In legal proceedings concerning the policy or program, the terms of the contract takes precedence over the terms of the certificate of coverage if there are any inconsistencies.

**Note:** The party playing the role of a subscriber is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant). However, a subscriber may make a claim under a policy, e.g., a subscriber under a health insurance policy may become the claimant for coverage under that policy for wellness examines or if injured and there is no liable third party. In the case of a subscriber making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that the subscriber has filed a claim for services covered under the health insurance policy.

**Example:** An employee or a member of an association.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassSubscriber
 */
export const RoleClassSubscriberCode = {
  /**
   * subscriber
   */
  SUBSCR: "SUBSCR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassSubscriberCode =
  typeof RoleClassSubscriberCode[keyof typeof RoleClassSubscriberCode];
