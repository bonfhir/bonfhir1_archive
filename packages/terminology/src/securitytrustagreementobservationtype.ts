/**
 * Type of security metadata observation made about security requirements for a security domain. \[ISO IEC 10181-1\]
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustAgreementObservationType
 */
export const SecurityTrustAgreementObservationTypeCode = {
  /**
   * trust agreement observation
   */
  trustagreementobservation: "TRSTAGREOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustAgreementObservationTypeCode =
  typeof SecurityTrustAgreementObservationTypeCode[keyof typeof SecurityTrustAgreementObservationTypeCode];
