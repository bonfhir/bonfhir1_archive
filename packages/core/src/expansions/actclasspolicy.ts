/**
 * **Description:**A mandate, regulation, obligation, requirement, rule, or expectation unilaterally imposed by one party on:

 *  The activity of another party
 *  The behavior of another party
 *  The manner in which an act is executed
 * http://terminology.hl7.org/ValueSet/v3-ActClassPolicy
 */
export const ActClassPolicyCode = {
  /**
   * policy
   */
  POLICY: "POLICY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassPolicyCode =
  typeof ActClassPolicyCode[keyof typeof ActClassPolicyCode];
