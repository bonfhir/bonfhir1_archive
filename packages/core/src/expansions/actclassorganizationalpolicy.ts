/**
 * **Description:**A mandate, obligation, requirement, rule, or expectation unilaterally imposed by an organization on:

 *  The activity of another party
 *  The behavior of another party
 *  The manner in which an act is executed

**Examples:**A clinical or research protocols imposed by a payer, a malpractice insurer, or an institution to which a provider must adhere. A mandate imposed by a denominational institution for a provider to provide or withhold certain information from the patient about treatment options.
 * http://terminology.hl7.org/ValueSet/v3-ActClassOrganizationalPolicy
 */
export const ActClassOrganizationalPolicyCode = {
  /**
   * organizational policy
   */
  ORGPOL: "ORGPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassOrganizationalPolicyCode =
  typeof ActClassOrganizationalPolicyCode[keyof typeof ActClassOrganizationalPolicyCode];
