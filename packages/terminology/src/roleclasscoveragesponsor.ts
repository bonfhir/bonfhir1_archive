/**
 * A role played by an entity, usually an organization that is the sponsor of an insurance plan or a health program. A sponsor is the party that is ultimately accountable for the coverage by employment contract or by law. A sponsor can be an employer, union, government agency, or association. Fully insured sponsors establish the terms of the plan and contract with health insurance plans to assume the risk and to administer the plan. Self-insured sponsors delegate coverage administration, but not risk, to third-party administrators. Program sponsors designate services to be covered in accordance with statute. Program sponsors may administer the coverage themselves, delegate coverage administration, but not risk to third-party administrators, or contract with health insurance plans to assume the risk and administrator a program. Sponsors qualify individuals who may become

1.  a policy holder of the plan;
2.  where the sponsor is the policy holder, who may become a subscriber or a dependent to a policy under the plan; or
3.  where the sponsor is a government agency, who may become program eligibles under a program.

The sponsor role may be further qualified by the SponsorRole.code. Entities playing the sponsor role may also play the role of a Coverage Administrator.

*Example:* An employer, union, government agency, or association.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassCoverageSponsor
 */
export const RoleClassCoverageSponsorCode = {
  /**
   * coverage sponsor
   */
  coveragesponsor: "SPNSR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCoverageSponsorCode =
  typeof RoleClassCoverageSponsorCode[keyof typeof RoleClassCoverageSponsorCode];
