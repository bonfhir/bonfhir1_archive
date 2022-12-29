/**
 * A verifier who legally authenticates the accuracy of an act. An example would be a staff physician who sees a patient and dictates a note, then later signs it. Their signature constitutes a legal authentication.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationLegalAuthenticator
 */
export const ParticipationLegalAuthenticatorCode = {
  /**
   * legal authenticator
   */
  legalauthenticator: "LA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationLegalAuthenticatorCode =
  typeof ParticipationLegalAuthenticatorCode[keyof typeof ParticipationLegalAuthenticatorCode];
