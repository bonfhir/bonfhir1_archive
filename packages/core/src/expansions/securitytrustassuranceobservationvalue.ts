/**
 * Values for security metadata observation made about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol.
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustAssuranceObservationValue
 */
export const SecurityTrustAssuranceObservationValueCode = {
  /**
   * trust assurance observation
   */
  TRSTLOAOBV: "TRSTLOAOBV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustAssuranceObservationValueCode =
  typeof SecurityTrustAssuranceObservationValueCode[keyof typeof SecurityTrustAssuranceObservationValueCode];
