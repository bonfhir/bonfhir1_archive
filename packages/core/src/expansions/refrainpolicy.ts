/**
 * Conveys prohibited actions which an information custodian, receiver, or user is not permitted to perform unless otherwise authorized or permitted under specified circumstances.

**Examples:**

 *  prohibit redisclosure without consent directive
 * http://terminology.hl7.org/ValueSet/v3-RefrainPolicy
 */
export const RefrainPolicyCode = {
  /**
   * refrain policy
   */
  RefrainPolicy: "RefrainPolicy",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RefrainPolicyCode =
  typeof RefrainPolicyCode[keyof typeof RefrainPolicyCode];
