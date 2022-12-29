/**
 * **Description:** A role played by a party covered under a policy as the policy holder. An individual may be either a person or an organization.

**Note:** The party playing the role of an individual insured is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant). However, a named insured may make a claim under a policy, e.g., a party that is the named insured and policy holder under a comprehensive automobile insurance policy may become the claimant for coverage under that policy if injured in an automobile accident and there is no liable third party. In the case of an individual insured making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that an individual insured has filed a claim for a loss.

**Example:** The individual insured under a comprehensive automobile, disability, or property and casualty policy that is the policy holder.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassIndividual
 */
export const RoleClassIndividualCode = {
  /**
   * individual
   */
  individual: "INDIV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassIndividualCode =
  typeof RoleClassIndividualCode[keyof typeof RoleClassIndividualCode];
