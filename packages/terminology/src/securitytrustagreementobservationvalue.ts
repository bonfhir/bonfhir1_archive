/**
 * Type of security metadata observation made about security requirements for a security domain. \[ISO IEC 10181-1\] Definition Is Immutable: true
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustAgreementObservationValue
 */
export const SecurityTrustAgreementObservationValueCode = {
  /**
   * trust agreement observation
   */
  TRSTAGREOBV: "TRSTAGREOBV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustAgreementObservationValueCode =
  typeof SecurityTrustAgreementObservationValueCode[keyof typeof SecurityTrustAgreementObservationValueCode];
