/**
 * **Description:** A role played by a party to an insurance policy to which the insurer agrees to indemnify for losses, provides benefits for, or renders services. A named insured may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subjects, or organizations.

**Discussion:** The coded concept NAMED should not be used where a more specific child concept in this Specializable value set applies. In some cases, the named insured may not be the policy holder, e.g., where a policy holder purchases life insurance policy in which another party is the named insured and the policy holder is the beneficiary of the policy.

**Note:** The party playing the role of a named insured is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant). However, a named insured may make a claim under a policy, e.g., e.g., a party that is the named insured and policy holder under a comprehensive automobile insurance policy may become the claimant for coverage under that policy e.g., if injured in an automobile accident and there is no liable third party. In the case of a named insured making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that a named insured has filed a claim for a loss.

**Example:** The named insured under a comprehensive automobile, disability, or property and casualty policy that is the named insured and may or may not be the policy holder.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassNamedInsured
 */
export const RoleClassNamedInsuredCode = {
  /**
   * named insured
   */
  NAMED: "NAMED",

  /**
   * dependent
   */
  DEPEN: "DEPEN",

  /**
   * individual
   */
  INDIV: "INDIV",

  /**
   * subscriber
   */
  SUBSCR: "SUBSCR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassNamedInsuredCode =
  typeof RoleClassNamedInsuredCode[keyof typeof RoleClassNamedInsuredCode];
