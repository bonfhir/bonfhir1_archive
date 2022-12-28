/**
 * Type of security metadata observation made about the formal declaration by an authority or neutral third party that validates the technical, security, trust, and business practice conformance of Trust Agents to facilitate security, interoperability, and trust among participants within a security domain or trust framework.
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustAccreditationObservationType
 */
export const SecurityTrustAccreditationObservationTypeCode = {
  /**
   * trust accreditation observation
   */
  TRSTACCRDOBS: "TRSTACCRDOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustAccreditationObservationTypeCode =
  typeof SecurityTrustAccreditationObservationTypeCode[keyof typeof SecurityTrustAccreditationObservationTypeCode];
