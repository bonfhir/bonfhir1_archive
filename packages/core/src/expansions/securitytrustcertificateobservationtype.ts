/**
 * Type of security metadata observation made about a set of security-relevant data issued by a security authority or trusted third party, together with security information which is used to provide the integrity and data origin authentication services for an IT resource (data, information object, service, or system capability). \[Based on ISO IEC 10181-1\]
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustCertificateObservationType
 */
export const SecurityTrustCertificateObservationTypeCode = {
  /**
   * trust certificate observation
   */
  TRSTCERTOBS: "TRSTCERTOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustCertificateObservationTypeCode =
  typeof SecurityTrustCertificateObservationTypeCode[keyof typeof SecurityTrustCertificateObservationTypeCode];
