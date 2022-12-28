/**
 * Types of security policies that further specify the ActClassPolicy value set.

**Examples:**

 *  encrypt
 *  prohibit redisclosure without consent directive
 * http://terminology.hl7.org/ValueSet/v3-SecurityPolicy
 */
export const SecurityPolicyCode = {
  /**
   * security policy
   */
  SecurityPolicy: "SecurityPolicy",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityPolicyCode =
  typeof SecurityPolicyCode[keyof typeof SecurityPolicyCode];
