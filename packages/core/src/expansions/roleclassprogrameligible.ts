/**
 * **Description:** A role played by a party that meets the eligibility criteria for coverage under a program. A program eligible may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subjects, or organizations.

**Discussion:** A program as typically government administered coverage for parties determined eligible under the terms of the program.

**Note:** The party playing a program eligible is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant). However a program eligible may make a claim under program, e.g., an unemployed worker may claim benefits under an unemployment insurance program, but parties playing these covered party role classes are not, for purposes of this vocabulary and in an effort to clearly distinguish role classes, considered claimants.

In the case of a program eligible, a role type code INJWKR (injured worker) subtypes the class to indicate that the covered party in a workers compensation program is an injured worker, and as such, has filed a "claim" under the program for benefits. Likewise, a covered role type code UNEMP (unemployed worker) subtypes the program eligible class to indicate that the covered party in an unemployment insurance program has filed a claim for unemployment benefits.

**Example:** A party meeting eligibility criteria related to health or financial status, e.g., in the U.S., persons meeting health, demographic, or financial criteria established by state and federal law are eligible for Medicaid.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassProgramEligible
 */
export const RoleClassProgramEligibleCode = {
  /**
   * program eligible
   */
  PROG: "PROG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassProgramEligibleCode =
  typeof RoleClassProgramEligibleCode[keyof typeof RoleClassProgramEligibleCode];
