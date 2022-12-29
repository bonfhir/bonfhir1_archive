/**
 * Type of security metadata observation made about a complete set of contracts, regulations, or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. \[Kantara Initiative\]
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustMechanismObservationType
 */
export const SecurityTrustMechanismObservationTypeCode = {
  /**
   * trust mechanism observation
   */
  trustmechanismobservation: "TRSTMECOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustMechanismObservationTypeCode =
  typeof SecurityTrustMechanismObservationTypeCode[keyof typeof SecurityTrustMechanismObservationTypeCode];
