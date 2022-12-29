/**
 * A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationVerifier
 */
export const ParticipationVerifierCode = {
  /**
   * verifier
   */
  verifier: "VRF",

  /**
   * authenticator
   */
  authenticator: "AUTHEN",

  /**
   * legal authenticator
   */
  legalauthenticator: "LA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationVerifierCode =
  typeof ParticipationVerifierCode[keyof typeof ParticipationVerifierCode];
