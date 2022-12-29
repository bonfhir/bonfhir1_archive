/**
 * Values for security metadata observation made about a complete set of contracts, regulations, or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. \[Kantara Initiative\]
 * http://terminology.hl7.org/ValueSet/v3-SecurityTrustMechanismObservationValue
 */
export const SecurityTrustMechanismObservationValueCode = {
  /**
   * none supplied 6
   */
  nonesupplied6: "TRSTMECOBV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityTrustMechanismObservationValueCode =
  typeof SecurityTrustMechanismObservationValueCode[keyof typeof SecurityTrustMechanismObservationValueCode];
