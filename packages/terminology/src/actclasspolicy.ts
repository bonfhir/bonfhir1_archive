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

  /**
   * jurisdictional policy
   */
  JURISPOL: "JURISPOL",

  /**
   * organizational policy
   */
  ORGPOL: "ORGPOL",

  /**
   * scope of practice policy
   */
  SCOPOL: "SCOPOL",

  /**
   * standard of practice policy
   */
  STDPOL: "STDPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassPolicyCode =
  typeof ActClassPolicyCode[keyof typeof ActClassPolicyCode];
