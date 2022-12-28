/**
 * Type of security metadata observation made about a complete set of contracts, regulations, or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. \[Kantara Initiative\]
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustFrameworkObservationType
 */
export const SecurityTrustFrameworkObservationTypeCode = {
  /**
   * trust framework observation
   */
  TRSTFWKOBS: "TRSTFWKOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustFrameworkObservationTypeCode =
  typeof SecurityTrustFrameworkObservationTypeCode[keyof typeof SecurityTrustFrameworkObservationTypeCode];
