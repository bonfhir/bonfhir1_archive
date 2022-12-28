/**
 * Type of security metadata observation made about aspects of trust applicable to an IT resource (data, information object, service, or system capability). Trust applicable to IT resources is established and maintained in and among security domains, and may be comprised of observations about the domainâ€™s trust authority, trust framework, trust policy, trust interaction rules, means for assessing and monitoring adherence to trust policies, mechanisms that enforce trust, and quality and reliability measures of assurance in those mechanisms. \[Based on ISO IEC 10181-1 and NIST SP 800-63-2\]

*Usage Note:* SecurityTrustObservationType may be used as a trust attribute in a computable trust policy, trust credential, trust assertion, or trust label field in a security label and populated with trust observation values. The valued trust attributes may be used for used for authentication, authorization, and access control decisions. These may also be used to negotiate trust relationships, adjudicate or bridge trust policies, and to specify requirements for participation in a Trust Domain or for asserting compliance with a Trust Framework.
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustObservationType
 */
export const SecurityTrustObservationTypeCode = {
  /**
   * SECTRSTOBS
   */
  SECTRSTOBS: "SECTRSTOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustObservationTypeCode =
  typeof SecurityTrustObservationTypeCode[keyof typeof SecurityTrustObservationTypeCode];
