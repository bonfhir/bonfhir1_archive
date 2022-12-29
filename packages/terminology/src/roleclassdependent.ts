/**
 * **Description:** A role played by a person covered under a policy or program based on an association with a subscriber, which is recognized by the policy holder.

**Note:** The party playing the role of a dependent is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant). However, a dependent may make a claim under a policy, e.g., a dependent under a health insurance policy may become the claimant for coverage under that policy for wellness examines or if injured and there is no liable third party. In the case of a dependent making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that the dependent has filed a claim for services covered under the health insurance policy.

**Example:** The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child. The policy holder may be required by law to recognize certain associations or may have discretion about the associations. For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents. Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently abled or deceased, a guardian ad Lidem or estate executor may be appointed to assume the subscriberaTMs legal standing in the relationship with the dependent.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassDependent
 */
export const RoleClassDependentCode = {
  /**
   * dependent
   */
  dependent: "DEPEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassDependentCode =
  typeof RoleClassDependentCode[keyof typeof RoleClassDependentCode];
