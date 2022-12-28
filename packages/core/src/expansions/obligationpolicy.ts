/**
 * Conveys the mandated workflow action that an information custodian, receiver, or user must perform.

**Examples:**

 *  encrypt

*Usage Note:* Per OASIS XACML, an obligation is an operation specified in a policy or policy that is performed in conjunction with the enforcement of an access control decision.
 * http://terminology.hl7.org/ValueSet/v3-ObligationPolicy
 */
export const ObligationPolicyCode = {
  /**
   * obligation policy
   */
  ObligationPolicy: "ObligationPolicy",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObligationPolicyCode =
  typeof ObligationPolicyCode[keyof typeof ObligationPolicyCode];
