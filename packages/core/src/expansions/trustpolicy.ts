/**
 * A mandate, obligation, requirement, rule, or expectation conveyed as security metadata between senders and receivers required to establish the reliability, authenticity, and trustworthiness of their transactions.

Trust security metadata are observation made about aspects of trust applicable to an IT resource (data, information object, service, or system capability).

Trust applicable to IT resources is established and maintained in and among security domains, and may be comprised of observations about the domainâ€™s trust authority, trust framework, trust policy, trust interaction rules, means for assessing and monitoring adherence to trust policies, mechanisms that enforce trust, and quality and reliability measures of assurance in those mechanisms. \[Based on ISO IEC 10181-1 and NIST SP 800-63-2\]
 * http://terminology.hl7.org/ValueSet/v3-TrustPolicy
 */
export const TrustPolicyCode = {
  /**
   * trust policy
   */
  ActTrustPolicyType: "ActTrustPolicyType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TrustPolicyCode =
  typeof TrustPolicyCode[keyof typeof TrustPolicyCode];
