/**
 * Values for security metadata observation made about the formal declaration by an authority or neutral third party that validates the technical, security, trust, and business practice conformance of Trust Agents to facilitate security, interoperability, and trust among participants within a security domain or trust framework.
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustAccreditationObservationValue
 */
export const SecurityTrustAccreditationObservationValueCode = {
  /**
   * trust accreditation observation
   */
  trustaccreditationobservation: "TRSTACCRDOBV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustAccreditationObservationValueCode =
  typeof SecurityTrustAccreditationObservationValueCode[keyof typeof SecurityTrustAccreditationObservationValueCode];
